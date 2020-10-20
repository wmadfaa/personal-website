import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout/Layout';
import Post from '../components/Post/Post';
import { PostProps } from '../components/Post/Post';

const BlogPost: React.FC<PostProps> = (props) => {
  const post = props.data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Post {...props} />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
