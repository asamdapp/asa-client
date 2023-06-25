import { sanityClient } from 'utils';

export const getLanguages = async (locale: string) => {
  const languages = await sanityClient.fetch(`
    *[_type == 'language' && __i18n_lang == '${locale}'] {
      _id,
      name,
      flag
    }
  `);
  return languages;
};
