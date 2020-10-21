import CMS from 'netlify-cms-app';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

import '../assets/styles/global.css';

CMS.registerPreviewTemplate('about-page', AboutPagePreview);
CMS.registerPreviewTemplate('contacts-page', ContactPagePreview);
