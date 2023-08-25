import React from 'react';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import {
  getAdvantages,
  getFaq,
  getFeedbacks,
  getGuarantees,
  getHowGetTranslation,
  getJobs,
  getLanguages,
  getMission,
  getPartners,
  getServices,
} from 'services';
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
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);
  const advantages = await getAdvantages(locale);
  const guarantees = await getGuarantees(locale);
  const partners = await getPartners();
  const feedbacks = await getFeedbacks();
  const mission = await getMission(locale);
  const jobs = await getJobs(locale);
  const faq = await getFaq(locale);


  return {
    props: {
      fallback: {
        ['services']: services,
        ['languages']: languages,
        ['how-get-translation']: howGetTranslation,
        ['advantages']: advantages,
        ['guarantees']: guarantees,
        ['partners']: partners,
        ['feedbacks']: feedbacks,
        ['mission']: mission,
        ['jobs']: jobs,
        ['faq']: faq,
      },
    },
  };
}
