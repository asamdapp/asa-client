import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { ServiceContainer } from 'containers';
import {
  getAdvantages,
  getFeedbacks,
  getGuarantees,
  getHowGetTranslation,
  getLanguages,
  getPartners,
  getServiceBySlug,
  getServices,
} from 'services';

const ServicesPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <ServiceContainer />
    </SWRConfig>
  );
};
export default ServicesPage;

export async function getStaticProps({ locale, query: { serviceSlug } }: any) {
  const service = await getServiceBySlug(serviceSlug);
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
        ['service']: service,
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
