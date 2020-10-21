import CMS from 'netlify-cms-app';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import ExperiencePreview from './preview-templates/ExperiencePreview';
import EducationPreview from './preview-templates/EducationPreview';
import ResumePreview from './preview-templates/ResumePreview';
import { Widget as IdWidget } from '@ncwidgets/id';

import '../assets/styles/global.css';

CMS.registerWidget(IdWidget as any);

CMS.registerPreviewTemplate('experiences', ExperiencePreview);
CMS.registerPreviewTemplate('educations', EducationPreview);

CMS.registerPreviewTemplate('about-page', AboutPagePreview);
CMS.registerPreviewTemplate('contacts-page', ContactPagePreview);
CMS.registerPreviewTemplate('resume-page', ResumePreview);
