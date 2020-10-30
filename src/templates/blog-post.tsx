import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Post from '../components/Post/Post';
import { BlogPostBySlugQuery } from '../../graphql-types';
import { DeepNonNullable } from 'utility-types';

const BlogPost: React.FC<PageProps<DeepNonNullable<BlogPostBySlugQuery>, { next: any; previous: any }>> = ({
  data,
  pageContext,
}) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title, date } = frontmatter;

  return (
    <Layout seo={{ title: title }}>
      <Post title={title} date={date} body={html} prevLink={pageContext.previous} nextLink={pageContext.next} />
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
