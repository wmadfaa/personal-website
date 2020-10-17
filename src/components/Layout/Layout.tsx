import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <main className={styles.main}>
        <Header />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
          <Footer />
        </motion.div>
      </main>
    </AnimatePresence>
  );
};

export default Layout;
