import { NextPage } from 'next';

import { LanguagesContainer } from 'containers';
import { getLanguages, getServices } from 'services';

const LanguagesPage: NextPage = (props) => {
  return <LanguagesContainer props={props} />;
};

export default LanguagesPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);
  const languages = await getLanguages(locale);

  return {
    props: {
      services: services,
      languages: languages,
    },
  };
}
