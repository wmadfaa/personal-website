import React from 'react';

import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};

export default BlogPage;
