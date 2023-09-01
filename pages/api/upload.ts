import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { Storage } from '@google-cloud/storage';
import { Telegraf } from 'telegraf';

import multer from 'multer';
import { createRouter, expressWrapper } from 'next-connect';

const storage = new Storage({
  keyFilename: 'asamd-396210-5643fb73dca7.json',
  projectId: 'asamd-396210',
});

const bucketName = 'asa-moldova';

const bucket = storage.bucket(bucketName);

const bot = new Telegraf('1611166208:AAG-SwtgeAf4uaNMZa1SRUuEgoOlakjjT18');

/* Don't miss that! */
// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '4mb',
//     },
//   },
// };

import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

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

        res.status(200).send(urlToFiles);

        // res.status(200).send('All files uploaded successfully');
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

      await bot.telegram.sendMessage('-980390331', message, {
        parse_mode: 'HTML',
      });

      if (urlToFiles.length > 0) {
        await bot.telegram.sendMediaGroup(
          '-980390331',
          urlToFiles?.map((url) => ({
            type: 'document',
            media: url,
            caption: `Fisiere atasate (${fields?.name})`,
          }))
        );
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

export default handler;
