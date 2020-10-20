import React from 'react';

import SEO from '../components/SEO';
import ContactsPageTemplate from '../templates/contacts-page';
import { useContactsPageStaticQuery } from '../templates/contacts-page';

const ContactPage: React.FC = () => {
  const contactsPageProps = useContactsPageStaticQuery();
  return (
    <>
      <SEO title="Contact" />
      <ContactsPageTemplate {...contactsPageProps} />
    </>
  );
};

export default ContactPage;
