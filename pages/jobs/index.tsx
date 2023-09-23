import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { JobsContainer } from 'containers';
import { getJobs, getServices } from 'services';

const JobsPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <JobsContainer />
    </SWRConfig>
  );
};
export default JobsPage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);
  const jobs = await getJobs(locale);

  return {
    props: {
      fallback: {
        services,
        jobs,
      },
    },
  };
}
