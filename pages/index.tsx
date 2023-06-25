import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { HomeContainer } from 'containers';
import { getHowGetTranslation, getLanguages, getServices } from 'services';

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

  return {
    props: {
      fallback: {
        ['services']: services,
        ['languages']: languages,
        ['how-get-translation']: howGetTranslation,
      },
    },
  };
}
