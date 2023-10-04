import { sanityClient } from 'utils';

export const getLanguages = async (locale: string) => {
  const languages = await sanityClient.fetch(`
  *[_type == "language" && __i18n_lang == '${locale}']|order(coalesce(__i18n_base->orderRank, orderRank)) {
    _id,
    name,
    flag,
    value,
    first_amo_id,
    second_amo_id
  }
  `);
  return languages;
};
