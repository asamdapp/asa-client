import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { HomeContainer } from 'containers';
import {
  getAdvantages,
  getFeedbacks,
  getGoogleReviewsUserRating,
  getGuarantees,
  getHowGetTranslation,
  getLanguages,
  getPartners,
  getServices,
} from 'services';

const HomePage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <HomeContainer />
    </SWRConfig>
  );
};

export default HomePage;

export async function getServerSideProps({ locale }: any) {
  const services = await getServices(locale);
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);
  const advantages = await getAdvantages(locale);
  const guarantees = await getGuarantees(locale);
  const partners = await getPartners();
  const feedbacks = await getFeedbacks();
  const googleReviews = await getGoogleReviewsUserRating();

  return {
    props: {
      fallback: {
        ['services']: services,
        ['languages']: languages,
        ['how-get-translation']: howGetTranslation,
        ['advantages']: advantages,
        ['guarantees']: guarantees,
        ['partners']: partners,
        ['feedbacks']: feedbacks,
        ['googleReviews']: googleReviews,
      },
    },
  };
}
