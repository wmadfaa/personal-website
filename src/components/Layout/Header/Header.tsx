import React from 'react';

import Container from '../../Base/Container/Container';

import MainNav from './Nav/Nav';
import Logo from './Logo/Logo';

import styles from './Header.module.css';
import { LogoProps } from './Logo/Logo';

export type HeaderProps = LogoProps;

const Header: React.FC<HeaderProps> = ({ logoTitle }) => (
  <header className={styles.header}>
    <Container itemsCenter>
      <Logo logoTitle={logoTitle} />
      <MainNav />
    </Container>
  </header>
);

export default Header;
