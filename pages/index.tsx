import { NextPage } from 'next';

import { HomeContainer } from 'containers';
import {
  getAdvantages,
  getFeedbacks,
  getGuarantees,
  getHowGetTranslation,
  getLanguages,
  getPartners,
  getServices,
} from 'services';

const HomePage: NextPage = (props) => {
  return <HomeContainer props={props} />;
};

export default HomePage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);
  const advantages = await getAdvantages(locale);
  const guarantees = await getGuarantees(locale);
  const partners = await getPartners();
  const feedbacks = await getFeedbacks();

  return {
    props: {
      services,
      languages,
      howGetTranslation,
      advantages,
      guarantees,
      partners,
      feedbacks,
    },
  };
}
