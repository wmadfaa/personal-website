import React from 'react';

import Container from '../Base/Container/Container';

import MainNav from './Nav/Nav';
import Logo from './Logo/Logo';

import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Container itemsCenter>
      <Logo />
      <MainNav />
    </Container>
  </header>
);

export default Header;
