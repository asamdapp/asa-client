import { NextPage } from 'next';
import { JobsContainer } from 'containers';

import { getJobs, getServices } from 'services';

const JobsPage: NextPage = (props) => {
  return <JobsContainer props={props} />;
};
export default JobsPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);
  const jobs = await getJobs(locale);

  return {
    props: {
      services: services,
      jobs: jobs,
    },
  };
}
