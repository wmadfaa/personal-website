import CMS from 'netlify-cms-app';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import ExperiencePreview from './preview-templates/ExperiencePreview';
import EducationPreview from './preview-templates/EducationPreview';

import '../assets/styles/global.css';

CMS.registerPreviewTemplate('about-page', AboutPagePreview);
CMS.registerPreviewTemplate('contacts-page', ContactPagePreview);
CMS.registerPreviewTemplate('experiences', ExperiencePreview);
CMS.registerPreviewTemplate('educations', EducationPreview);
