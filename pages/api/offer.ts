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

    // @ts-ignore
    // console.log('fields string', [...fields]);
    // return res.status(500).send('error');

    try {
      const urlToFiles = await postFilesToGoogleStorage(files);

      await sendMessageTelegramGroup(fields, urlToFiles);
      await postAmoCRM(fields, urlToFiles);

      res.status(200).send({ ok: true });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

export default handler;
