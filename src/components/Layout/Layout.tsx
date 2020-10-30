import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SEO, { SeoProps } from './SEO';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './Layout.module.css';

const Layout: React.FC<{ seo: SeoProps }> = ({ seo, children }) => {
  return (
    <>
      <SEO {...seo} />
      <AnimatePresence exitBeforeEnter>
        <Header logoTitle="wmadfaa" />
        <main className={styles.main}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
          </motion.div>
        </main>
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Layout;
