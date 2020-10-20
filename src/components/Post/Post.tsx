import React from 'react';
import Link from 'gatsby-link';

import Container from '../../components/Base/Container/Container';
import TitleSection from '../../components/Base/TitleSection/TitleSection';

import styles from './Post.module.css';

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

export interface PostProps {
  data: {
    markdownRemark: BlogPost;
  };
  pageContext: {
    slug: string;
    next: BlogPost;
    previous: BlogPost;
  };
}

const Post: React.FC<PostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
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
  );
};

export default Post;
