import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import ContactsPageTemplate, { ContactsPageTemplateData } from '../../templates/contacts-page';

const ContactsPagePreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const { title, subtitle, contacts }: ContactsPageTemplateData = entry.getIn(['data']).toJS();
  return <ContactsPageTemplate title={title} subtitle={subtitle} contacts={contacts} />;
};

export default ContactsPagePreview;
