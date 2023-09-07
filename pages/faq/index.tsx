import React from 'react';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { getFaq, getServices } from 'services';
import { FaqContainer } from 'containers';

const FaqPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FaqContainer />
    </SWRConfig>
  );
};

export default FaqPage;

export async function getServerSideProps({ locale }: any) {
  const services = await getServices(locale);
  const faq = await getFaq(locale);

  return {
    props: {
      fallback: {
        ['services']: services,
        ['faq']: faq,
      },
    },
  };
}
