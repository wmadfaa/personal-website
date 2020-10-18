import React from 'react';

import Container from '../../Base/Container/Container';

import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.links}>
        <a className={styles.link} href="https://github.com/wmadfaa" rel="noreferrer noopener" target="_blank">
          GitHub
        </a>
        <a className={styles.link} href="https://twitter.com/Wasim97867619" rel="noreferrer noopener" target="_blank">
          Twitter
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/wasim-almadfaa-77b9b0155/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
