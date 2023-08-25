import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '84ktv72i',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: string) => {
  return builder.image(source);
};

export const LANGUAGES = {
  RO: 'ro',
  RU: 'ru',
} as const;

export const CONTACTS = {
  chisinau: {
    phone: {
      toShow: '078 150 555',
      value: '37378150555',
    },
    additionalPhone: {
      toShow: '068 853 504',
      value: '37368853504',
      messengers: {
        viber: 'viber://chat/?number=%2B37368853504',
        whatsapp: 'https://api.whatsapp.com/send/?phone=37368853504',
        telegram: 'https://t.me/asamoldova',
      },
    },
    map: '',
  },
} as const;

export const PREFIX_TITLE = "ASA.md - "
