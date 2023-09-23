import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { LanguagesContainer } from 'containers';
import { getLanguages, getServices } from 'services';

const LanguagesPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <LanguagesContainer />
    </SWRConfig>
  );
};

export default LanguagesPage;

export async function getStaticProps({ locale }: any) {
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
