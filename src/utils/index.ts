import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import youtubeLogo from 'assets/images/icons/youtube.svg';
import instagramLogo from 'assets/images/icons/instagram.svg';
import facebookLogo from 'assets/images/icons/facebook.svg';
import tiktokLogo from 'assets/images/icons/tiktok.svg';
import googleMapsLogo from 'assets/images/icons/google-maps.svg';

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

export const LANGUAGES_COUNT = 30 as const;
export const OVER_REVIEWS_COUNT = 230 as const;

export const LANGUAGES = {
  RO: 'ro',
  RU: 'ru',
} as const;

export const DELIVERY_TIME = [
  {
    id: '3',
    name: {
      ro: '3 zile lucrătoare',
      ru: '3 рабочих дня',
    },
    amo_id: 1524465,
  },
  {
    id: '5',
    name: {
      ro: '5 zile lucrătoare',
      ru: '5 рабочих дней',
    },
    amo_id: 1524467,
  },
];

export const FORM_SERVICES_IDS = {
  traduceriAutorizate: 'traduceri-autorizate',
  traduceriLegalizateNotar: 'traduceri-legalizate-notar',
  traduceriLegalizateNotarApostila: 'traduceri-legalizate-notar-apostila',
  apostila: 'apostila',
  interpretariat: 'interpretariat',
};

export const AMO_IDS = {
  services: '963341',
  comment: '964123',
  deliveryTime: '1029539',
  sourceLanguages: '962603',
  targetLanguages: '962807',
  countryApostilleRequested: '963043',
};

export const FORM_SERVICES = [
  {
    id: FORM_SERVICES_IDS.traduceriAutorizate,
    name: {
      ro: 'Traduceri Autorizate',
      ru: 'Сертифицированные переводы',
    },
    isServiceForLanguage: true,
    amo_id: 1319577,
  },
  {
    id: FORM_SERVICES_IDS.traduceriLegalizateNotar,
    name: {
      ro: 'Traduceri Legalizate (Notar)',
      ru: ' Легализованные переводы (нотариус)',
    },
    isServiceForLanguage: true,
    info: 'common:info_service_notar',
    amo_id: 1319579,
  },
  {
    id: FORM_SERVICES_IDS.traduceriLegalizateNotarApostila,
    name: {
      ro: 'Traduceri Legalizate (Notar) + Apostila',
      ru: 'Легализованные переводы (нотариус) + Апостиль',
    },
    isServiceForLanguage: true,
    isServiceWithCountryApostilleRequested: true,
    info: 'common:info_service_notar',
    amo_id: 1524413,
  },
  {
    id: FORM_SERVICES_IDS.apostila,
    name: {
      ro: 'Apostila',
      ru: 'Апостиль',
    },
    isServiceWithCountryApostilleRequested: true,
    isServiceWithDeliveryTime: true,
    amo_id: 1319581,
  },
  {
    id: FORM_SERVICES_IDS.interpretariat,
    name: {
      ro: 'Interpretariat',
      ru: 'Устный перевод',
    },
    isServiceForLanguage: true,
    isServiceWithoutFiles: true,
    amo_id: 1319583,
  },
];

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
    map: {
      city_ro: 'Chișinău',
      city_ru: 'Кишинев',
      address_ro: 'Chișinău, str. Alexandru cel Bun 62, of. 56',
      address_ru: 'Кишинев, Александру чел Бун 62, из 56',
      timetable_ro: ['09:00 - 18:00, Luni - Vineri', '09:00 - 14:00, Sâmbătă'],
      timetable_ru: [
        '09:00 - 18:00, Понедельник - Пятница',
        '09:00 - 14:00, Суббота',
      ],
      email: 'comenzi.asa@gmail.com',
      position: [47.02531, 28.84062],
      routes: {
        googleMaps: 'https://goo.gl/maps/mVt5pGfKhKAxXcLPA',
        mapMd:
          'https://map.md/ro/street/660427978?number=62&embed=1#17.71/47.025283/28.840324',
        waze: 'https://www.waze.com/en-GB/live-map/directions/chisinau?to=place.ws.row.24065581.62',
        yandex: 'https://yandex.ru/maps/-/CDQZqELQ',
      },
    },
  },

  ialoveni: {
    phone: {
      toShow: '0 683 274 17',
      value: '37368327417',
    },
    map: {
      city_ro: 'Ialoveni',
      city_ru: 'Яловены',
      address_ro: 'Ialoveni, str. Alexandru cel Bun 78/1, et. 2, of. 5 ',
      address_ru: 'Яловены, Александру чел Бун 78/1, эт. 2, из 5 ',
      timetable_ro: ['09:00 - 16:00, Luni - Vineri'],
      timetable_ru: ['09:00 - 16:00, Понедельник - Пятница'],
      email: 'proadricrissrl@mail.ru',
      position: [46.9471321, 28.7740134],
      routes: {
        googleMaps: 'https://goo.gl/maps/WyNfVaZqKWigxPW56',
        mapMd:
          'https://map.md/ro/street/436428079?number=78/1&embed=1#13.9/46.94714/28.774',
        waze: 'https://ul.waze.com/ul?ll=46.94721157%2C28.77401348&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
        yandex: 'https://yandex.ru/maps/-/CDQjRC2S',
      },
    },
  },
} as any;

export const SOCIAL_MEDIA = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/asa.moldova/',
    logo: instagramLogo,
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@asa.md',
    logo: tiktokLogo,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/serviciiautorizate.md/',
    logo: facebookLogo,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@agentiaserviciiautorizate9951',
    logo: youtubeLogo,
  },
  {
    name: 'Google Maps',
    link: 'https://goo.gl/maps/8rsUWA3VS9muKf4B8',
    logo: googleMapsLogo,
  },
] as any;

export const PREFIX_TITLE = 'ASA.md - ';

export const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};
