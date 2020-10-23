import React from 'react';
import Link from 'gatsby-link';

import Container from '../../components/Base/Container/Container';
import TitleSection from '../../components/Base/TitleSection/TitleSection';
import HTMLContent from '../Base/HTMLContent/HTMLContent';
import { HTMLContentProps } from '../Base/HTMLContent/HTMLContent';

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
  contentComponent?: React.ElementType<HTMLContentProps>;
}

const Post: React.FC<PostProps> = ({ contentComponent, data, pageContext }) => {
  const Content = contentComponent || HTMLContent;

  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Container section>
      <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
      <Content content={post.html as any} />
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
