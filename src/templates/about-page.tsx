import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import HeroBanner, { HeroBannerProps } from '../components/HeroBanner/HeroBanner';
import Services, { ServicesProps } from '../components/Services/Services';
import Layout from '../components/Layout/Layout';
import { SeoProps } from '../components/Layout/SEO/index';

export interface AboutPageTemplateData {
  heroBannerSection: HeroBannerProps;
  servicesSection: ServicesProps;
  SEO: SeoProps;
}

const AboutPageTemplate: React.FC<AboutPageTemplateData> = ({ SEO, heroBannerSection, servicesSection }) => {
  return (
    <Layout seo={SEO}>
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
          SEO {
            title
          }
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
