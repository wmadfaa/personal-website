import React from 'react';
import { NotifyContext, NotifyContextValue } from './NotificationProvider';

function useNotification() {
  const { notify } = React.useContext(NotifyContext);
  return notify as NotifyContextValue['notify'];
}

export default useNotification;
