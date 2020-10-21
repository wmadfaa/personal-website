import React from 'react';

import ContactsPageTemplate from '../templates/contacts-page';
import { useContactsPageStaticQuery } from '../templates/contacts-page';
import Layout from '../components/Layout/Layout';

const ContactPage: React.FC = () => {
  const { SEO, ...contactsPageProps } = useContactsPageStaticQuery();
  return (
    <Layout seo={SEO}>
      <ContactsPageTemplate {...contactsPageProps} />
    </Layout>
  );
};

export default ContactPage;
