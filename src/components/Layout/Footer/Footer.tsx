import React from 'react';

import Container from '../../Base/Container/Container';

import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.links}>
        <a className={styles.link} href="/" rel="noreferrer noopener" target="_blank">
          GitHub
        </a>
        <a
          className={styles.link}
          href="https://github.com/SaimirKapaj/gatsby-markdown-typescript-personal-website"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </a>
        <a className={styles.link} href="/" rel="noreferrer noopener" target="_blank">
          Behance
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
