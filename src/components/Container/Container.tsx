import React from 'react';

import styles from './Container.module.css';
import classnames from 'classnames';

interface Props {
  section?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ section, children }) => (
  <div className={classnames(styles.container, { [styles.section]: section })}>{children}</div>
);

export default Container;
