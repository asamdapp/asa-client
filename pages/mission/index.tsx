import React from 'react';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';
import { MissionContainer } from 'containers';
import {
  getAdvantages,
  getFeedbacks,
  getGuarantees,
  getHowGetTranslation,
  getJobs,
  getLanguages,
  getMission,
  getPartners,
  getServices,
} from 'services';

const MissionPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <MissionContainer />
    </SWRConfig>
  );
};
export default MissionPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);
  const advantages = await getAdvantages(locale);
  const guarantees = await getGuarantees(locale);
  const partners = await getPartners();
  const feedbacks = await getFeedbacks();
  const mission = await getMission(locale);
  const jobs = await getJobs(locale);

  return {
    props: {
      fallback: {
        services: services,
        languages: languages,
        'how-get-translation': howGetTranslation,
        advantages: advantages,
        guarantees: guarantees,
        partners: partners,
        feedbacks: feedbacks,
        mission: mission,
        jobs: jobs,
      },
    },
  };
}
