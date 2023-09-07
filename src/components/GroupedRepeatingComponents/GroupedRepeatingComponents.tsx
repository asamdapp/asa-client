import React, { FC } from 'react';
import { DiscountSection, HowToGetOnlineTranslation } from 'components';
import {
  AdvantagesSection,
  FeedbackSection,
  GuaranteesSection,
  LanguagesSection,
  ServicesSection,
} from 'containers/HomeContainer/components';
import dynamic from 'next/dynamic';

const PartnersSection = dynamic(
  () =>
    import(
      'containers/HomeContainer/components/PartnersSection/PartnersSection'
    ),
  { ssr: false }
);

type section =
  | 'services'
  | 'discount'
  | 'how-to-get-online-translation'
  | 'languages';

interface IProps {
  hidden?: section[];
}

export const GroupedRepeatingComponents: FC<IProps> = ({
  hidden,
}): JSX.Element => {
  return (
    <>
      {!hidden?.includes('services') && <ServicesSection />}

      <DiscountSection withGradient />

      <HowToGetOnlineTranslation />

      <LanguagesSection />

      <AdvantagesSection />

      <GuaranteesSection />

      <PartnersSection />

      <FeedbackSection />

      <DiscountSection />
    </>
  );
};
