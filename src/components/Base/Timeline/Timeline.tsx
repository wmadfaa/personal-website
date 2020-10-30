import React from 'react';
import moment from 'moment';
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
        {moment(startDate).format('MMMM YYYY')} -{' '}
        {moment(endDate).isValid() ? moment(endDate).format('MMMM YYYY') : endDate}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
    <div className={styles.content}>{content}</div>
  </div>
);

export default Timeline;
