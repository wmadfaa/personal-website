import React from 'react';

import SEO from '../components/Layout/SEO';
import Layout from '../components/Layout/Layout';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
  </Layout>
);

export default ResumePage;
