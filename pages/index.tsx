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
import { SWRConfig } from 'swr';

const HomePage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <HomeContainer />
    </SWRConfig>
  );
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
      fallback: {
        services,
        languages,
        howGetTranslation,
        advantages,
        guarantees,
        partners,
        feedbacks,
      },
    },
  };
}
