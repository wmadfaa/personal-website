import React from 'react';
import classnames from 'classnames';

import Icon, { IconProps } from '../Icon/Icon';

import styles from './InfoBlock.module.css';

interface Props {
  center?: boolean;
  title: string;
  content: React.ReactNode;
  icon: IconProps;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center }) => (
  <div className={classnames(styles.infoBlock, { [styles.center]: center })}>
    <span className={styles.icon}>
      <Icon icon={icon} />
    </span>
    <div className={classnames(styles.wrapper, { [styles.center]: center })}>
      <h3 className={classnames('text-md', styles.title)}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  </div>
);

export default InfoBlock;
