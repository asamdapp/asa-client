import { sanityClient } from 'utils';

export const getFeedbacks = async () => {
  const feedbacks = await sanityClient.fetch(`
    *[_type == 'feedback'] | order(stars desc) {
      _id,
      name,
      review,
      photo,
      stars
    }
  `);
  return feedbacks;
};
