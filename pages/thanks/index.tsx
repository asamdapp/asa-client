import { ThanksContainer } from 'containers';
import { getServices } from 'services';
import { NextPage } from 'next';

const ThanksPage: NextPage = (props) => {
  return <ThanksContainer props={props} />;
};

export default ThanksPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);

  return {
    props: {
      services: services,
    },
  };
}
