import React from 'react';

import classnames from 'classnames';

import styles from './TitleSection.module.css';

interface Props {
  center?: boolean;
  title: string;
  subtitle?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <div className={classnames(styles.titleSection, { [styles.center]: center })}>
    {subtitle && <h4 className={classnames(styles.subtitle, { [styles.center]: center })}>{title}</h4>}
    <h2 className={classnames(styles.title, { [styles.center]: center })}>{subtitle}</h2>
    <h2 className={classnames(styles.separator, { [styles.center]: center })} />
  </div>
);

export default TitleSection;
