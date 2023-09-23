import { sanityClient } from 'utils';

export const getFeedbacks = async () => {
  const feedbacks = await sanityClient.fetch(`
    *[_type == 'feedback'] | order(stars desc) {
      _id,
      name,
      review,
      photo,
      stars,
      language
    }
  `);
  return feedbacks;
};

export const getGoogleReviewsUserRating = async () => {
  const feedbacks = await fetch('/api/reviews')
    .then((result) => result.json())
    .catch(() => null);
  return feedbacks;
};
