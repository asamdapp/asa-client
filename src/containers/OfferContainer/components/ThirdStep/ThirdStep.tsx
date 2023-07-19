import React, { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { Label } from 'UI';
import { useFormContext } from 'react-hook-form';

export const ThirdStep: FC = (): JSX.Element => {
  const { setValue, watch } = useFormContext();

  const files = watch('files');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setValue('files', acceptedFiles);
    },
    accept: {
      'image/jpeg': ['.jpeg', '.png'],
      'application/pdf': ['.pdf'],
    },
  });

  return (
    <>
      <Label htmlFor="dropzone" isRequired>
        Atașează fișierele
      </Label>
      <button
        className={clsx(
          'p-5 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl transition hover:border-downriver hover:bg-downriver/5',
          { '!border-downriver !bg-downriver/5': isDragActive }
        )}
        {...getRootProps()}
      >
        <input id="dropzone" {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div>
            <p className="font-medium">
              Drag &apos;n&apos; drop some files here, or click to select files
            </p>
            <p className="text-sm text-gray-400">
              (Only *.jpeg, *.png and *.pdf images will be accepted)
            </p>
          </div>
        )}
      </button>

      {files && (
        <ul className="list-disc pl-5">
          {files.map((file: File) => (
            <li className="text-sm text-atoll my-1" key={file.name}>
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
