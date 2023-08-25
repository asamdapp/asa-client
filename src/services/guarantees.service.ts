import { sanityClient } from 'utils';

export const getGuarantees = async (locale: string) => {
  const guarantees = await sanityClient.fetch(`
    *[_type == 'guarantees' && __i18n_lang == '${locale}'] {
      _id,
      title,
      description,
    }
  `);
  return guarantees;
};
