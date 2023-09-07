import { ThanksContainer } from 'containers';
import { getServices } from 'services';

const Thanks = () => {
  return <ThanksContainer />;
};
export default Thanks;

export async function getServerSideProps({ locale }: any) {
  const services = await getServices(locale);

  return {
    props: {
      fallback: {
        ['services']: services,
      },
    },
  };
}
