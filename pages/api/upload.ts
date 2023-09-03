import { NextApiHandler, NextApiRequest } from 'next';
import path from 'path';
import fs from 'fs';

import { Storage } from '@google-cloud/storage';
import { Telegraf } from 'telegraf';
import formidable from 'formidable';

const storage = new Storage({
  keyFilename: path.resolve(
    '.',
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
            caption: `Fisiere atasate (${fields?.name})`,
          }))
        );
      }

      res.status(200).send({ name: fields?.name, files: urlToFiles });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

export default handler;
