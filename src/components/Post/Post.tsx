import React from 'react';
import Link from 'gatsby-link';

import Container from '../../components/Base/Container/Container';
import TitleSection from '../../components/Base/TitleSection/TitleSection';
import HTMLContent from '../Base/HTMLContent/HTMLContent';
import { HTMLContentProps } from '../Base/HTMLContent/HTMLContent';

import styles from './Post.module.css';

interface NavigationLinkProps {
  slug: string;
  title: string;
}

export interface PostProps {
  date: string;
  title: string;
  body: string;
  prevLink: NavigationLinkProps | null;
  nextLink: NavigationLinkProps | null;
  contentComponent?: React.ElementType<HTMLContentProps>;
}

const Post: React.FC<PostProps> = ({ date, title, body, prevLink, nextLink, contentComponent }) => {
  const Content = contentComponent || HTMLContent;

  return (
    <Container section>
      <TitleSection title={date} subtitle={title} />
      <Content content={body} />
      <div className={styles.links}>
        <span>
          {prevLink && (
            <Link to={prevLink.slug} rel="previous">
              ← {prevLink.title}
            </Link>
          )}
        </span>
        <span>
          {nextLink && (
            <Link to={nextLink.slug} rel="next">
              {nextLink.title} →
            </Link>
          )}
        </span>
      </div>
    </Container>
  );
};

export default Post;
