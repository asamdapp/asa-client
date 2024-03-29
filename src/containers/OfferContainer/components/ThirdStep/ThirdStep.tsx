import React, { FC, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { Label } from 'UI';
import { useFormContext } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

export const ThirdStep: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { setValue, watch } = useFormContext();
  const [isError, setError] = useState<boolean>(false);

  const files = watch('files');

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop: (acceptedFiles: File[]) => {
        const totalSize = acceptedFiles.reduce(
          (acc: number, file: File) => acc + file.size,
          0
        );

        if (totalSize > 30_000_000) {
          setError(true);
        } else {
          setValue('files', acceptedFiles);
        }
      },
      accept: {
        'image/jpeg': ['.jpeg', '.jpg'],
        'image/png': ['.png'],
        'application/pdf': ['.pdf'],
      },
      maxSize: 5_000_000,
      maxFiles: 20,
    });

  useEffect(() => {
    if (fileRejections?.length > 0) {
      setError(true);
      setValue('files', []);
    } else {
      setError(false);
    }
  }, [fileRejections]);

  return (
    <>
      <Label htmlFor="dropzone" isRequired>
        {t('common:attach_files')}
      </Label>
      <button
        type="button"
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
            <p className="font-medium text-sm mb-1">
              {t('common:select_or_drop_files')}
            </p>
            <p className="text-xs text-gray-400">
              {t('common:files_accept_only_format')}
            </p>
          </div>
        )}
      </button>

      {isError && (
        <p className="text-cardinal text-sm font-semibold">
          {t('common:files_error')}
        </p>
      )}

      {files?.length > 0 && (
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
