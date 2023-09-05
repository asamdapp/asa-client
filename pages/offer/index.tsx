import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { OfferContainer } from 'containers';
import {
  getAdvantages,
  getFeedbacks,
  getGuarantees,
  getHowGetTranslation,
  getLanguages,
  getPartners,
  getServices,
} from 'services';

const OfferPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <OfferContainer />
    </SWRConfig>
  );
};

export default OfferPage;

export async function getServerSideProps({ locale }: any) {
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
        ['services']: services,
        ['languages']: languages,
        ['how-get-translation']: howGetTranslation,
        ['advantages']: advantages,
        ['guarantees']: guarantees,
        ['partners']: partners,
        ['feedbacks']: feedbacks,
      },
    },
  };
}
