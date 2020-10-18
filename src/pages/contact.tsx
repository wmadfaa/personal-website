import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout/Layout';
import ContactInfo from '../components/ContactInfo/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;
