import { sanityClient } from 'utils';

export const getAdvantages = async (locale: string) => {
  const advantages = await sanityClient.fetch(`
    *[_type == 'advantages' && __i18n_lang == '${locale}'] {
      _id,
      title,
      description,
      image,
    }
  `);
  return advantages;
};
