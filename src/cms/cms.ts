import CMS from 'netlify-cms-app';
import AboutPagePreview from './preview-templates/AboutPagePreview';

import '../assets/styles/global.css';

CMS.registerPreviewTemplate('about-page', AboutPagePreview);
