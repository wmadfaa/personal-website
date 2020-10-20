import React from 'react';

import SEO from '../components/SEO';
import AboutPageTemplate, { useAboutPageStaticQuery } from '../templates/about-page';

const IndexPage: React.FC = () => {
  const { heroBannerSection, servicesSection } = useAboutPageStaticQuery();

  return (
    <>
      <SEO title="About Me" />
      <AboutPageTemplate heroBannerSection={heroBannerSection} servicesSection={servicesSection} />
    </>
  );
};

export default IndexPage;
