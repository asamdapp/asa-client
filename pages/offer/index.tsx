import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { OfferContainer } from 'containers';
import { getLanguages, getServices } from 'services';

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

  return {
    props: {
      fallback: {
        ['services']: services,
        ['languages']: languages,
      },
    },
  };
}
