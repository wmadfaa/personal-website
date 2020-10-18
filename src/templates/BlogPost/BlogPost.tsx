import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout/Layout';

import Container from '../../components/Base/Container/Container';
import TitleSection from '../../components/Base/TitleSection/TitleSection';

import styles from './BlogPost.module.css';

interface BlogPost {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
  };
}

interface Props {
  data: {
    markdownRemark: BlogPost;
  };
  pageContext: {
    slug: string;
    next: BlogPost;
    previous: BlogPost;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
        <span
          className="format-html"
          dangerouslySetInnerHTML={{
            __html: post.html as any,
          }}
        />
        <div className={styles.links}>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </div>
      </Container>
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
