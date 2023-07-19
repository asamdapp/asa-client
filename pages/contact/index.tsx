import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { getHowGetTranslation, getLanguages, getServices } from 'services';

const ContactPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
      consequatur dignissimos est fuga nam obcaecati saepe. Accusamus ad
      architecto corporis culpa, cupiditate doloremque eaque eos excepturi harum
      impedit laborum minus modi molestias nihil nobis obcaecati pariatur
      possimus praesentium quae quas quasi quibusdam quis reiciendis rem sit
      totam velit voluptate voluptatum!
    </SWRConfig>
  );
};

export default ContactPage;

export async function getServerSideProps({ locale }: any) {
  const services = await getServices(locale);
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);

  return {
    props: {
      fallback: {
        ['services']: services,
        ['languages']: languages,
        ['how-get-translation']: howGetTranslation,
      },
    },
  };
}
