import React from 'react';
import classnames from 'classnames';
import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion';

import styles from './Button.module.css';

interface ButtonProps extends HTMLMotionProps<'button'> {
  primary?: boolean;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<ButtonProps> = ({ primary, block, children, ...buttonProps }) => (
  <motion.button
    className={classnames(styles.button, { [styles.primary]: primary, [styles.block]: block })}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...buttonProps}
  >
    {children}
  </motion.button>
);

export default Button;
