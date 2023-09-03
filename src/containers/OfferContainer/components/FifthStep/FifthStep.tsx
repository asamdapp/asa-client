import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';
import { Label } from 'UI';

interface ItemProps {
  isFirst?: boolean;
  title: string;
  value: string;
}

const Item: FC<ItemProps> = ({
  isFirst = false,
  title,
  value,
}): JSX.Element => {
  return (
    <div
      className={
        'flex md:flex-row flex-col md:gap-5 md:items-center justify-between' +
        (!isFirst ? ' mt-3 pt-3' : '')
      }
    >
      <div className="text-sm text-gray-400">{title}:</div>
      <div className="md:text-lg text-downriver">{value}</div>
    </div>
  );
};

export const FifthStep: FC = (): JSX.Element => {
  const { getValues, register } = useFormContext();
  const { lang } = useTranslation();
  return (
    <>
      <div className="text-xl text-center my-3">
        Verificati datele inainte de a le trimite
      </div>

      <div className="flex flex-col divide-y">
        <Item
          title={'Serviciul selectat'}
          value={getValues('service')?.name[lang]}
          isFirst
        />

        {getValues('service')?.isServiceForLanguage && (
          <>
            <Item
              title={'Din ce limba traducem'}
              value={getValues('source_language')?.name}
            />

            <Item
              title={'In ce limba traducem'}
              value={getValues('target_language')?.name}
            />

            <Item title={'Termen livrare'} value={String(getValues('date'))} />
          </>
        )}

        {getValues('service')?.isServiceWithCountryApostilleRequested && (
          <Item
            title={'Tara'}
            value={getValues('country_apostille_requested')}
          />
        )}

        {getValues('service')?.isServiceWithDeliveryTime && (
          <Item
            title={'Termen livrare'}
            value={getValues('delivery_time')?.name[lang]}
          />
        )}

        {!getValues('service')?.isServiceWithoutFiles && (
          <Item
            title={'Fisierele adaugate'}
            value={
              getValues('files') && (
                <ul className="list-disc pl-5">
                  {getValues('files')?.map((file: File) => (
                    <li className="text-sm text-atoll my-1" key={file.name}>
                      {file.name}
                    </li>
                  ))}
                </ul>
              )
            }
          />
        )}

        <Item title={'Nume / Prenume'} value={getValues('name')} />
        <Item title={'E-mail'} value={getValues('email')} />
        <Item title={'Phone'} value={getValues('phone')} />
        {getValues('comment') && (
          <Item title={'Comentariu'} value={getValues('comment')} />
        )}
      </div>

      <div className="flex items-center mt-2 pt-4 border-t border-gray-200">
        <input
          type="checkbox"
          id="accepted"
          className="
            h-6 w-6 flex-none bg-gray-100 dark:bg-gray-800 rounded-lg mr-3 cursor-pointer
            checked:bg-cardinal checked:ring-cardinal checked:hover:bg-cardinal checked:focus:bg-cardinal
          "
          {...register('accepted')}
        />
        <Label isRequired={false} htmlFor="accepted">
          Sunt deacord cu preclurarea datelor cu caracter personal
        </Label>
      </div>
    </>
  );
};
