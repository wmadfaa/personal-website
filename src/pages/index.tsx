import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout/Layout';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Services from '../components/Services/Services';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Services />
    </Layout>
  );
};

export default IndexPage;
