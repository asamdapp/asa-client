import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { ServiceContainer } from 'containers';
import {
  getHowGetTranslation,
  getLanguages,
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

export async function getServerSideProps({
  locale,
  query: { serviceSlug },
}: any) {
  const services = await getServices(locale);
  const service = await getServiceBySlug(serviceSlug);
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);

  return {
    props: {
      fallback: {
        ['services']: services,
        ['service']: service,
        ['languages']: languages,
        ['how-get-translation']: howGetTranslation,
      },
    },
  };
}
