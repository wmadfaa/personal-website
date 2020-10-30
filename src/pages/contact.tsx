import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactsPageTemplate from '../templates/contacts-page';
import { useContactPageQuery } from '../graphql/contact-page';

const ContactPage: React.FC = () => {
  const { markdownRemark } = useContactPageQuery();
  const { SEO, title, subtitle, contacts } = markdownRemark.frontmatter;
  return (
    <Layout seo={SEO}>
      <ContactsPageTemplate title={title} subtitle={subtitle} contacts={contacts} />
    </Layout>
  );
};

export default ContactPage;
