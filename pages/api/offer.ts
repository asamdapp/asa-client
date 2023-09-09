import { NextApiHandler, NextApiRequest } from 'next';
import path from 'path';
import fs from 'fs';

import { Storage } from '@google-cloud/storage';
import { Telegraf } from 'telegraf';
import formidable from 'formidable';
import { telegrafThrottler } from 'telegraf-throttler';

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

const throttler = telegrafThrottler({
  in: {
    // Aggresively drop inbound messages
    highWater: 0, // Trigger strategy if throttler is not ready for a new job
    maxConcurrent: 1, // Only 1 job at a time
    minTime: 30000, // Wait this many milliseconds to be ready, after a job
  },
});
bot.use(throttler);

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

      const pushStringToArray = (
        emoji: string,
        title: string,
        value: string,
        arr: string[]
      ) => {
        const string = `${emoji}  <i><u>${title}:</u></i> <b>${value}</b>`;
        return arr?.push(string);
      };

      const getMessage = (fields: any) => {
        const arr: string[] = [];

        if (fields?.name) {
          pushStringToArray('👤', 'Client', fields?.name, arr);
        }

        if (fields?.phone) {
          pushStringToArray('📞', 'Telefon', fields?.phone, arr);
        }

        if (fields?.email) {
          pushStringToArray('📧', 'E-mail', fields?.email, arr);
        }

        if (fields?.service) {
          pushStringToArray('💼', 'Serviciu', fields?.service, arr);
        }

        if (fields?.country_apostille_requested) {
          pushStringToArray(
            '🌏',
            'Țara',
            fields?.country_apostille_requested,
            arr
          );
        }

        if (fields?.source_language) {
          pushStringToArray(
            '📗',
            'Din ce limba traducem',
            fields?.source_language,
            arr
          );
        }

        if (fields?.target_language) {
          pushStringToArray(
            '📘',
            'In ce limba traducem',
            fields?.target_language,
            arr
          );
        }

        if (fields?.date) {
          pushStringToArray('🗓', 'Termen livrare', fields?.date, arr);
        }

        if (fields?.delivery_time) {
          pushStringToArray('🗓', 'Termen livrare', fields?.delivery_time, arr);
        }

        if (fields?.comment) {
          pushStringToArray('💬', 'Comentariu', fields?.comment, arr);
        }

        return arr.join('\n\n');
      };

      const message = getMessage(fields);

      await bot.telegram.sendMessage(
        telegramChatId,
        `<i>⬇️ START =&#62; ${fields?.name} &#62; &#62; &#62; &#62;</i>`,
        {
          parse_mode: 'HTML',
        }
      );

      await bot.telegram.sendMessage(telegramChatId, message, {
        parse_mode: 'HTML',
      });

      if (urlToFiles.length > 0) {
        for (const url of urlToFiles) {
          await bot.telegram.sendDocument(telegramChatId, url);
        }
      }

      await bot.telegram.sendMessage(
        telegramChatId,
        `<i>&#60; &#60; &#60; &#60; ${fields?.name} &#60;= END 🔼</i>`,
        {
          parse_mode: 'HTML',
        }
      );

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

      res.status(200).send({ name: fields?.name, files: urlToFiles });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

export default handler;
