import { NextApiHandler, NextApiRequest } from 'next';
import formidable from 'formidable';

import { postFilesToGoogleStorage } from '../../src/utils/api/google-storage';
import { sendMessageTelegramGroup } from '../../src/utils/api/telegram';
import { postAmoCRM } from '../../src/utils/api/amo';

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
      if (err) {
        reject(err);
      } else {
        // Iterați prin toate câmpurile și transformați valorile în JSON
        const parsedFields: any = {};
        for (const key in fields) {
          if (fields.hasOwnProperty(key)) {
            const fieldValue = fields[key];
            if (Array.isArray(fieldValue) && fieldValue.length > 0) {
              // Obțineți prima valoare din array și încercați să o parsați în JSON
              try {
                parsedFields[key] = JSON.parse(fieldValue[0]);
              } catch (error) {
                // Dacă nu poate fi parsată ca JSON, păstrați valoarea originală
                parsedFields[key] = fieldValue[0];
              }
            } else {
              // Dacă nu este un array, păstrați valoarea originală
              parsedFields[key] = fieldValue;
            }
          }
        }

        resolve({ fields: parsedFields, files });
      }
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const {
      fields,
      files: { files },
    } = await readFile(req);

    // console.log(fields);
    //
    // return res.status(500).send('error');

    try {
      const urlToFiles = await postFilesToGoogleStorage(files);

      await sendMessageTelegramGroup(fields, urlToFiles);
      await postAmoCRM(fields, urlToFiles);

      res.status(500).send({ ok: true });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

export default handler;
