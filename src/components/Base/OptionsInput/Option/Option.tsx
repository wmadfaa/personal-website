import React from 'react';
import Icon from '../../Icon/Icon';
import { IconProps } from '../../Icon/Icon';

import styles from './Option.module.css';
import { motion } from 'framer-motion';
import classnames from 'classnames';

export interface OptionProps {
  value: string;
  title: string;
  icon?: string | IconProps;
  active?: boolean;
  onChange(evt: React.ChangeEvent<HTMLInputElement>): void;
}

const Option: React.FC<OptionProps> = ({ onChange, value, title, icon, active }) => {
  return (
    <motion.label
      className={classnames(styles.option, { [styles.active]: active })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <Icon icon={icon as IconProps} />}
      {` `}
      {title}
      <input onChange={onChange} type="radio" className={styles.input} value={value} checked={false} />
    </motion.label>
  );
};

export default Option;
