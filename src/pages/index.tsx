import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout/Layout';
import AboutPageTemplate, { useAboutPageStaticQuery } from '../templates/about-page';

const IndexPage: React.FC = () => {
  const { heroBannerSection, servicesSection } = useAboutPageStaticQuery();

  return (
    <Layout>
      <SEO title="About Me" />
      <AboutPageTemplate heroBannerSection={heroBannerSection} servicesSection={servicesSection} />
    </Layout>
  );
};

export default IndexPage;
