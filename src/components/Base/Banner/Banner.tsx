import React from 'react';
import { Link } from 'gatsby';

import Container from '../Container/Container';
import Button from '../Button/Button';
import TitleSection from '../TitleSection/TitleSection';

import styles from './Banner.module.css';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText }) => (
  <section className={styles.banner}>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <p className={styles.content}>{content}</p>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </section>
);

export default Banner;
