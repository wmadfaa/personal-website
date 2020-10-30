import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsInfo, { ContactsProps } from '../components/ContactsInfo/ContactsInfo';

export type ContactsPageTemplateData = ContactsProps;

const ContactsPageTemplate: React.FC<ContactsPageTemplateData> = ({ title, subtitle, contacts }) => {
  return (
    <>
      <ContactsInfo title={title} subtitle={subtitle} contacts={contacts} />
      <ContactForm title="Contact Form" subtitle="request for a service" />
    </>
  );
};

export default ContactsPageTemplate;
