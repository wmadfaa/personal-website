import React from 'react';
import { createPortal } from 'react-dom';
import shortId from 'shortid';
import { AnimatePresence } from 'framer-motion';

import Notification, { NotificationProps } from './Notification';

import styles from './Notification.module.css';

export interface NotifyContextValue {
  notify(notificationPayload: Omit<NotificationProps, 'id' | 'onClose'>, timeOut?: number): void;
}

export const NotifyContext = React.createContext<Partial<NotifyContextValue>>({});

function useCreateDomElement() {
  const [domElement, setDomElement] = React.useState<HTMLDivElement>();

  React.useEffect(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    setDomElement(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  return domElement;
}

function useNotifications() {
  const [notifications, setNotifications] = React.useState<Array<NotificationProps>>([]);

  const notify = React.useCallback(
    (notificationPayload: Omit<NotificationProps, 'id' | 'onClose'>, timeOut: number = 2000) => {
      const id = shortId();

      function removeNotification() {
        setNotifications((notifications) => notifications.filter((n) => n.id !== id));
      }

      setNotifications((notifications) => [
        ...notifications,
        { id, onClose: removeNotification, ...notificationPayload },
      ]);

      setTimeout(removeNotification, timeOut);
    },
    [],
  );

  return { notify, notifications };
}

const NotificationProvider: React.FC = ({ children }) => {
  const notificationRoot = useCreateDomElement();
  const { notify, notifications } = useNotifications();

  return (
    <>
      {' '}
      <NotifyContext.Provider value={{ notify }}>{children}</NotifyContext.Provider>
      {notificationRoot &&
        createPortal(
          <div className={styles.notificationsContainer}>
            <AnimatePresence>
              {notifications.map((notification) => (
                <Notification key={notification.id} {...notification} />
              ))}
            </AnimatePresence>
          </div>,
          notificationRoot,
        )}
    </>
  );
};

export default NotificationProvider;
