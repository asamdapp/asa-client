import { sanityClient } from 'utils';

export const getPartners = async () => {
  const partners = await sanityClient.fetch(`
    *[_type == 'partners'] {
      _id,
      name,
      logo
    }
  `);
  return partners;
};
