import React from 'react';
import Layout from '../components/Layout/Layout';

import AboutPageTemplate from '../templates/about-page';
import useAboutPageQuery from '../graphql/about-page';

const IndexPage: React.FC = () => {
  const { markdownRemark } = useAboutPageQuery();

  const { SEO, heroBannerSection, servicesSection } = markdownRemark.frontmatter;

  return (
    <Layout seo={SEO}>
      <AboutPageTemplate heroBannerSection={heroBannerSection} servicesSection={servicesSection} />
    </Layout>
  );
};

export default IndexPage;
