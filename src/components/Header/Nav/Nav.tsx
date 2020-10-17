import React, { useState } from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import styles from './Nav.module.css';

const MotionLink = motion.custom(Link);

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'About Me',
    slug: '/',
  },
  {
    title: 'Resume',
    slug: '/resume/',
  },
  {
    title: 'Blog',
    slug: '/blog/',
  },
  {
    title: 'Contact Me',
    slug: '/contact/',
  },
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={classnames(styles.nav, { [styles.open]: open })}>
        {mainNavItems.map((item, index) => (
          <MotionLink
            className={styles.item}
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName={styles.active}
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </MotionLink>
        ))}
      </nav>
      <button className={classnames(styles.toggleBtn, { [styles.open]: open })} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
    </>
  );
};

export default MainNav;
