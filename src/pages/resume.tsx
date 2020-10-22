import React from 'react';

import Layout from '../components/Layout/Layout';
import ResumePageTemplate from '../templates/resume-page';
import { useResumePageStaticQuery } from '../templates/resume-page';

const ResumePage: React.FC = () => {
  const { SEO, ...resumePageTemplateProps } = useResumePageStaticQuery();

  return (
    <Layout seo={SEO}>
      <ResumePageTemplate {...resumePageTemplateProps} />
    </Layout>
  );
};

export default ResumePage;
