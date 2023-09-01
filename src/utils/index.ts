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

export const DELIVERY_TIME = [
  {
    id: '3',
    name: {
      ro: '3 zile lucrătoare',
      ru: '3 рабочих дня',
    },
  },
  {
    id: '5',
    name: {
      ro: '5 zile lucrătoare',
      ru: '5 рабочих дней',
    },
  },
];

export const FORM_SERVICES_IDS = {
  traduceriAutorizate: 'traduceri-autorizate',
  traduceriLegalizateNotar: 'traduceri-legalizate-notar',
  traduceriLegalizateNotarApostila: 'traduceri-legalizate-notar-apostila',
  apostila: 'apostila',
  interpretariat: 'interpretariat',
};

export const FORM_SERVICES = [
  {
    id: FORM_SERVICES_IDS.traduceriAutorizate,
    name: {
      ro: 'Traduceri Autorizate',
      ru: 'Сертифицированные переводы',
    },
    isServiceForLanguage: true,
  },
  {
    id: FORM_SERVICES_IDS.traduceriLegalizateNotar,
    name: {
      ro: 'Traduceri Legalizate (Notar)',
      ru: ' Легализованные переводы (нотариус)',
    },
    isServiceForLanguage: true,
  },
  {
    id: FORM_SERVICES_IDS.traduceriLegalizateNotarApostila,
    name: {
      ro: 'Traduceri Legalizate (Notar) + Apostila',
      ru: 'Легализованные переводы (нотариус) + Апостиль',
    },
    isServiceForLanguage: true,
    isServiceWithCountryApostilleRequested: true,
  },
  {
    id: FORM_SERVICES_IDS.apostila,
    name: {
      ro: 'Apostila',
      ru: 'Апостиль',
    },
    isServiceWithCountryApostilleRequested: true,
    isServiceWithDeliveryTime: true,
  },
  {
    id: FORM_SERVICES_IDS.interpretariat,
    name: {
      ro: 'Interpretariat',
      ru: 'Устный перевод',
    },
    isServiceForLanguage: true,
    isServiceWithoutFiles: true,
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

export const PREFIX_TITLE = 'ASA.md - ';
