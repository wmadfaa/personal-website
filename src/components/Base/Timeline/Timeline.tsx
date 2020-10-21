import React from 'react';

import styles from './Timeline.module.css';

export interface TimelineProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<TimelineProps> = ({ title, subtitle, content, startDate, endDate }) => (
  <div className={styles.timeline}>
    <span className={styles.point} />
    <div className={styles.details}>
      <div className={styles.date}>
        {startDate} - {endDate}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
    <div className={styles.content}>{content}</div>
  </div>
);

export default Timeline;
