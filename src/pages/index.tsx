import React from 'react';
import Layout from '../components/Layout/Layout';

import AboutPageTemplate, { useAboutPageStaticQuery } from '../templates/about-page';

const IndexPage: React.FC = () => {
  const { heroBannerSection, servicesSection, SEO } = useAboutPageStaticQuery();

  return (
    <Layout seo={SEO}>
      <AboutPageTemplate heroBannerSection={heroBannerSection} servicesSection={servicesSection} />;
    </Layout>
  );
};

export default IndexPage;
