import React from 'react';
import { NextPage } from 'next';

import { getFaq, getServices } from 'services';
import { FaqContainer } from 'containers';

const FaqPage: NextPage = (props) => {
  return <FaqContainer props={props} />;
};

export default FaqPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);
  const faq = await getFaq(locale);

  return {
    props: {
      services: services,
      faq: faq,
    },
  };
}
