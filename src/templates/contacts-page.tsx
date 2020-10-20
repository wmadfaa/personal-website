import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout/Layout';
import ContactsInfo, { ContactsProps } from '../components/ContactsInfo/ContactsInfo';

export type ContactsPageTemplateData = ContactsProps;

const ContactsPageTemplate: React.FC<ContactsPageTemplateData> = ({ title, subtitle, contacts }) => {
  return (
    <Layout>
      <ContactsInfo title={title} subtitle={subtitle} contacts={contacts} />
    </Layout>
  );
};

export default ContactsPageTemplate;

export function useContactsPageStaticQuery(): ContactsPageTemplateData {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contacts page" } }) {
        frontmatter {
          title
          subtitle
          contacts {
            title
            icon
            content
          }
        }
      }
    }
  `);

  return frontmatter;
}
