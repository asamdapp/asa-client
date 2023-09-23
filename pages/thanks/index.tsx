import { ThanksContainer } from 'containers';
import { getServices } from 'services';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';

const ThanksPage: NextPage = ({ fallback }: any) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <ThanksContainer />
      </SWRConfig>
    </>
  );
};

export default ThanksPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);

  return {
    props: {
      fallback: {
        services: services,
      },
    },
  };
}
