import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ContactsInfo, { ContactsProps } from '../components/ContactsInfo/ContactsInfo';
import { SeoProps } from '../components/Layout/SEO/index';

export type ContactsPageTemplateData = ContactsProps;

const ContactsPageTemplate: React.FC<ContactsPageTemplateData> = ({ title, subtitle, contacts }) => {
  return <ContactsInfo title={title} subtitle={subtitle} contacts={contacts} />;
};

export default ContactsPageTemplate;

export function useContactsPageStaticQuery(): ContactsPageTemplateData & { SEO: SeoProps } {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contacts page" } }) {
        frontmatter {
          SEO {
            title
          }
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
