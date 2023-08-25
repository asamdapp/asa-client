import React, { FC } from 'react';
import { DiscountSection, HowToGetOnlineTranslation } from 'components';
import {
  AdvantagesSection,
  FeedbackSection,
  GuaranteesSection,
  LanguagesSection,
  PartnersSection,
  ServicesSection,
} from '../../containers/HomeContainer/components';

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
