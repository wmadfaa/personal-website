import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';

import styles from './Button.module.css';

interface Props {
  primary?: boolean;
  block?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ primary, block, children }) => (
  <motion.button
    className={classnames(styles.button, { [styles.primary]: primary, [styles.block]: block })}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

export default Button;
