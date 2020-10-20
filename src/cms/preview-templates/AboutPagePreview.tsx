import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import AboutPageTemplate, { AboutPageTemplateData } from '../../templates/about-page';

const AboutPagePreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const { heroBannerSection, servicesSection }: AboutPageTemplateData = entry.getIn(['data']).toJS();
  return <AboutPageTemplate heroBannerSection={heroBannerSection} servicesSection={servicesSection} />;
};

export default AboutPagePreview;
