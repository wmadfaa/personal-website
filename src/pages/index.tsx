import React from 'react';

import AboutPageTemplate, { useAboutPageStaticQuery } from '../templates/about-page';

const IndexPage: React.FC = () => {
  const { heroBannerSection, servicesSection, SEO } = useAboutPageStaticQuery();

  return <AboutPageTemplate SEO={SEO} heroBannerSection={heroBannerSection} servicesSection={servicesSection} />;
};

export default IndexPage;
