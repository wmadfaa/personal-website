import React from 'react';
import { Link } from 'gatsby';

import styles from './Logo.module.css';

export interface LogoProps {
  logoTitle: string;
}

const Logo: React.FC<LogoProps> = ({ logoTitle }) => {
  return (
    <Link className={styles.logo} to="/">
      <h1 className={styles.ownerName}>{logoTitle}</h1>
    </Link>
  );
};

export default Logo;
