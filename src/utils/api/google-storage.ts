import path from 'path';
import fs from 'fs';
import formidable from 'formidable';
import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  keyFilename: path.resolve(
    './public',
    process.env.GOOGLE_STORAGE_KEY_FILENAME as string
  ),
  projectId: process.env.GOOGLE_STORAGE_PROJECT_ID,
});

const bucketName = process.env.GOOGLE_STORAGE_BUCKET_NAME as string;
const bucket = storage.bucket(bucketName);

export const postFilesToGoogleStorage = async (files?: formidable.File[]) => {
  const urlToFiles: string[] = [];

  try {
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
  } catch (e) {
    console.error('Google Storage', e);
  }

  return urlToFiles;
};
