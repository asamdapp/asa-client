import { sanityClient } from 'utils';

export const getHowGetTranslation = async (locale: string) => {
  const services = await sanityClient.fetch(`
    *[_type == 'how-get-translation' && __i18n_lang == '${locale}'] {
      _id,
      name,
      image
    }
  `);
  return services;
};
