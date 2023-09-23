import { NextPage } from 'next';

import { getServices } from 'services';
import { ContactContainer } from 'containers';

const ContactPage: NextPage = (props) => {
  return <ContactContainer props={props} />;
};

export default ContactPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);

  return {
    props: {
      services: services,
    },
  };
}
