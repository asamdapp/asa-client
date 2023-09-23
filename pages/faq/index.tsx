import React from 'react';
import { NextPage } from 'next';

import { getFaq, getServices } from 'services';
import { FaqContainer } from 'containers';
import { SWRConfig } from 'swr';

const FaqPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FaqContainer />
    </SWRConfig>
  );
};

export default FaqPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);
  const faq = await getFaq(locale);

  return {
    props: {
      fallback: {
        services,
        faq,
      },
    },
  };
}
