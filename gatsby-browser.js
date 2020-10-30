/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from 'react';
import './src/styles/tailwind.css';
import 'prism-theme-one-dark/prism-onedark.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './src/styles/global.css';
import NotificationProvider from './src/components/Base/Notification/NotificationProvider';

export const wrapRootElement = ({ element }) => <NotificationProvider>{element}</NotificationProvider>;
