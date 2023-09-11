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
  const { lang, t } = useTranslation();
  return (
    <>
      <div className="text-base font-semibold text-center my-3 max-w-[450px] mx-auto text-atoll">
        <div>{t('common:title_check_data_1')}</div>
        <div>{t('common:title_check_data_2')}</div>
      </div>

      <div className="flex flex-col divide-y">
        <Item
          title={t('common:selected_service')}
          value={getValues('service')?.name[lang]}
          isFirst
        />

        {getValues('service')?.isServiceForLanguage && (
          <>
            <Item
              title={t('common:source_language')}
              value={getValues('source_language')?.name}
            />

            <Item
              title={t('common:target_language')}
              value={getValues('target_language')?.name}
            />

            <Item
              title={t('common:delivery_time')}
              value={String(getValues('date'))}
            />
          </>
        )}

        {getValues('service')?.isServiceWithCountryApostilleRequested && (
          <Item
            title={t('common:country_apostille_requested')}
            value={getValues('country_apostille_requested')?.name[lang]}
          />
        )}

        {getValues('service')?.isServiceWithDeliveryTime && (
          <Item
            title={t('common:delivery_time')}
            value={getValues('delivery_time')?.name[lang]}
          />
        )}

        {!getValues('service')?.isServiceWithoutFiles && (
          <Item
            title={t('common:added_files')}
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

        <Item title={t('common:name_surname')} value={getValues('name')} />
        <Item title="E-mail" value={getValues('email')} />
        <Item title={t('common:phone')} value={getValues('phone')} />
        {getValues('comment') && (
          <Item title={t('common:comment')} value={getValues('comment')} />
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
          {t('common:agree_with_processing_personal_data')}
        </Label>
      </div>
    </>
  );
};
