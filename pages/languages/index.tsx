import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { LanguagesContainer } from 'containers';
import {
  getAdvantages,
  getFeedbacks,
  getGuarantees,
  getHowGetTranslation,
  getLanguages,
  getPartners,
  getServices,
} from 'services';

const LanguagesPage: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <LanguagesContainer />
    </SWRConfig>
  );
};

export default LanguagesPage;


export async function getServerSideProps({ locale }: any) {
  const services = await getServices(locale);
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);
  const advantages = await getAdvantages(locale);
  const guarantees = await getGuarantees(locale);
  const partners = await getPartners();
  const feedbacks = await getFeedbacks();

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
      },
    },
  };
}
