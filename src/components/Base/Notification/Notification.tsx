import React from 'react';

import styles from './Notification.module.css';
import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import classnames from 'classnames';

export interface NotificationProps {
  id: string;
  title: string;
  message: string;
  onClose(id: string): void;
  status: 'success' | 'error';
}

const Notification: React.FC<NotificationProps> = ({ id, title, message, onClose, status }) => {
  const handleOnClose = () => onClose(id);

  return (
    <motion.div
      className={classnames(styles.root, styles[status])}
      initial={{ opacity: 0, scale: 0.95, x: 300 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: 300 }}
      transition={{ delay: 0.3 }}
      role="alert"
    >
      <div className={styles.content}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.msg}>{message}</p>
        </div>
        <div className={styles.closeBtn} onClick={handleOnClose} aria-label="Close">
          <Icon title="close" icon="times" />
        </div>
      </div>
    </motion.div>
  );
};

export default Notification;
