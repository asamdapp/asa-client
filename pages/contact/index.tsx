import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { getServices } from 'services';
import { ContactContainer } from 'containers';

const ContactPage: NextPage = ({ fallback }: any) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <ContactContainer />
      </SWRConfig>
    </>
  );
};

export default ContactPage;

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
