import { NextPage } from 'next';

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
import { SWRConfig } from 'swr';

const ServicesPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <ServiceContainer />
    </SWRConfig>
  );
};

export default ServicesPage;

export async function getStaticPaths({ locales }: any) {
  let paths: any = [];

  for (const locale of locales) {
    const services = await getServices(locale);

    for (const service of services) {
      paths.push({
        params: {
          serviceSlug: service?.slug?.current,
        },
        locale,
      });
    }
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ locale, params: { serviceSlug } }: any) {
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
        service,
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
