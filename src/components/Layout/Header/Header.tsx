import React from 'react';
import { Link } from 'gatsby';
import Container from '../../Base/Container/Container';
import MainNav from './Nav/Nav';

import styles from './Header.module.css';

const Header: React.FC<{ logoTitle: string }> = ({ logoTitle }) => (
  <header className={styles.header}>
    <Container itemsCenter>
      <Link className={styles.logo} to="/">
        <h1 className={styles.ownerName}>{logoTitle}</h1>
      </Link>
      <MainNav />
    </Container>
  </header>
);

export default Header;
