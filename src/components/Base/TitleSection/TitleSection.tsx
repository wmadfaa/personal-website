import React from 'react';

import classnames from 'classnames';

import styles from './TitleSection.module.css';

export interface TitleSectionData {
  title: string;
  subtitle?: string;
}

export interface TitleSectionProps extends TitleSectionData {
  center?: boolean;
}

const TitleSection: React.FC<TitleSectionProps> = ({ center, title, subtitle }) => (
  <div className={classnames(styles.titleSection, { [styles.center]: center })}>
    {subtitle && <h4 className={classnames(styles.subtitle, { [styles.center]: center })}>{title}</h4>}
    <h2 className={classnames(styles.title, { [styles.center]: center })}>{subtitle}</h2>
  </div>
);

export default TitleSection;
