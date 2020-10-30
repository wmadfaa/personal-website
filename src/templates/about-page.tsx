import React from 'react';

import HeroBanner, { HeroBannerProps } from '../components/HeroBanner/HeroBanner';
import Services, { ServicesProps } from '../components/Services/Services';

export interface AboutPageTemplateData {
  heroBannerSection: HeroBannerProps;
  servicesSection: ServicesProps;
}

const AboutPageTemplate: React.FC<AboutPageTemplateData> = ({ heroBannerSection, servicesSection }) => {
  return (
    <>
      <HeroBanner {...heroBannerSection} />
      <Services {...servicesSection} />
    </>
  );
};

export default AboutPageTemplate;
