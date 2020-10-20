import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout/Layout';
import HeroBanner, { HeroBannerProps } from '../components/HeroBanner/HeroBanner';
import Services, { ServicesProps } from '../components/Services/Services';

export interface AboutPageTemplateData {
  heroBannerSection: HeroBannerProps;
  servicesSection: ServicesProps;
}

const AboutPageTemplate: React.FC<AboutPageTemplateData> = ({ heroBannerSection, servicesSection }) => {
  return (
    <Layout>
      <HeroBanner {...heroBannerSection} />
      <Services {...servicesSection} />
    </Layout>
  );
};

export default AboutPageTemplate;

export function useAboutPageStaticQuery(): AboutPageTemplateData {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "about page" } }) {
        frontmatter {
          heroBannerSection {
            role
            greeting
            aboutMe
          }
          servicesSection {
            title
            subtitle
            services {
              title
              icon
              description
            }
          }
        }
      }
    }
  `);

  return frontmatter;
}
