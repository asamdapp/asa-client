import { NextApiHandler, NextApiRequest } from 'next';
import path from 'path';
import fs from 'fs';

import { Storage } from '@google-cloud/storage';
import { Telegraf } from 'telegraf';
import formidable from 'formidable';

const storage = new Storage({
  keyFilename: path.resolve(
    './public',
    process.env.GOOGLE_STORAGE_KEY_FILENAME as string
  ),
  projectId: process.env.GOOGLE_STORAGE_PROJECT_ID,
});

const bucketName = process.env.GOOGLE_STORAGE_BUCKET_NAME as string;
const bucket = storage.bucket(bucketName);

const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);
const telegramChatId = process.env.TELEGRAM_CHAT_ID as string;

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const {
      fields,
      files: { files },
    } = await readFile(req);

    try {
      const urlToFiles = [];

      if (files && files.length > 0) {
        for (const file of files) {
          const fileStream = fs.createReadStream(file.filepath);

          const fileName =
            file.newFilename + '.' + file.originalFilename?.split('.').pop();
          const blob = await bucket.file(fileName);
          const blobStream = blob.createWriteStream({
            resumable: false,
            gzip: true,
          });

          fileStream.pipe(blobStream);

          urlToFiles.push(
            `https://storage.googleapis.com/asa-moldova/${fileName}`
          );

          await new Promise((resolve, reject) => {
            blobStream.on('finish', resolve);
            blobStream.on('error', reject);
          });
        }
      }

      const message =
        '<i><u>Client:</u></i> ' +
        `<b>${fields?.name}</b>` +
        '\n' +
        '\n' +
        '<i><u>Telefon:</u></i> ' +
        `<b>${fields?.phone}</b>` +
        '\n' +
        '\n' +
        '<i><u>E-mail:</u></i> ' +
        `<b>${fields?.email}</b>` +
        '\n' +
        '\n' +
        '<i><u>Serviciu:</u></i> ' +
        `<b>${fields?.service}</b>` +
        '\n' +
        '\n' +
        '<i><u>Termen livrare:</u></i> ' +
        `<b>${fields?.delivery_time}</b>` +
        '\n' +
        '\n' +
        '<i><u>Țara (pentru care se solicită apostila):</u></i> ' +
        `<b>${fields?.country_apostille_requested}</b>` +
        '\n' +
        '\n' +
        '<i><u>Din ce limba traducem:</u></i> ' +
        `<b>${fields?.source_language}</b>` +
        '\n' +
        '\n' +
        '<i><u>In ce limba traducem:</u></i> ' +
        `<b>${fields?.target_language}</b>` +
        '\n' +
        '\n' +
        '<i><u>Termen livrare:</u></i> ' +
        `<b>${fields?.date}</b>` +
        '\n' +
        '\n' +
        `${
          fields?.comment
            ? '<b><i><u>Comentariu:</u></i></b> ' + fields?.comment
            : ' '
        }`;

      await bot.telegram.sendMessage(telegramChatId, message, {
        parse_mode: 'HTML',
      });

      if (urlToFiles.length > 0) {
        await bot.telegram.sendMediaGroup(
          telegramChatId,
          urlToFiles?.map((url) => ({
            type: 'document',
            media: url,
          }))
        );
      }

      // Amo CRM
      const { name, email, phone, ...restFields } = fields;
      const data = JSON.stringify({
        token: '7cc418e5-ad94-42cc-affd-13f5c0e99a98',
        client_id: 30248032,
        contact: {
          name,
          email,
          phone,
        },
        fields: {
          files: urlToFiles,
          ...restFields,
        },
      });

      const config = {
        method: 'POST',
        url: 'https://platon.progression.md/v4/app/forms.crm.add',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      };

      const amo = await fetch(config.url, {
        method: config.method,
        headers: config.headers,
        body: config.data,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok AMO');
          }
          return response.json();
        })
        .then((data) => {
          console.error('amoCRM data: ', data);
          return data;
        })
        .catch((error) => {
          console.error(error);
        });

      res.status(200).send({ name: fields?.name, files: urlToFiles, amo });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

export default handler;
