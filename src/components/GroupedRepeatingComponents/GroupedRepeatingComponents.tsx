import React, { FC } from 'react';
import { DiscountSection, HowToGetOnlineTranslation } from 'components';
import {
  AdvantagesSection,
  FeedbackSection,
  GuaranteesSection,
  LanguagesSection,
  PartnersSection,
  ServicesSection,
} from 'containers/HomeContainer/components';

type section =
  | 'services'
  | 'discount'
  | 'how-to-get-online-translation'
  | 'languages';

interface IProps {
  hidden?: section[];
  props: any;
}

export const GroupedRepeatingComponents: FC<IProps> = ({
  props,
  hidden,
}): JSX.Element => {
  return (
    <>
      {!hidden?.includes('services') && <ServicesSection props={props} />}

      <DiscountSection withGradient />

      <HowToGetOnlineTranslation props={props} />

      <LanguagesSection props={props} />

      <AdvantagesSection props={props} />

      <GuaranteesSection props={props} />

      <PartnersSection props={props} />

      <FeedbackSection props={props} />

      <DiscountSection />
    </>
  );
};
