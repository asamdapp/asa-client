import { sanityClient } from 'utils';

export const getMission = async (locale: string) => {
  const about = await sanityClient.fetch(`
    *[_type == 'about' && __i18n_lang == '${locale}'][0] {
      _id,
      mission
    }
  `);
  return about;
};


export const getJobs = async (locale: string) => {
  const partners = await sanityClient.fetch(`
    *[_type == 'about' && __i18n_lang == '${locale}'][0] {
      _id,
      jobs
    }
  `);
  return partners;
};
