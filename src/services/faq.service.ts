import { sanityClient } from 'utils';

export const getFaq = async (locale: string) => {
  const faq = await sanityClient.fetch(`
    *[_type == 'faq' && __i18n_lang == '${locale}'] | order(_createdAt asc) {
      _id,
      title,
      description,
    }
  `);
  return faq;
};
