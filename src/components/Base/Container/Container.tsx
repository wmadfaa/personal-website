import React from 'react';

import styles from './Container.module.css';
import classnames from 'classnames';

interface Props {
  itemsCenter?: boolean;
  section?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ itemsCenter, section, children }) => (
  <div className={classnames(styles.container, { [styles.itemsCenter]: itemsCenter, [styles.section]: section })}>
    {children}
  </div>
);

export default Container;
