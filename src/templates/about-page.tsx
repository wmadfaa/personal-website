import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import HeroBanner, { HeroBannerProps } from '../components/HeroBanner/HeroBanner';
import Services, { ServicesProps } from '../components/Services/Services';
import { SeoProps } from '../components/Layout/SEO/index';

export interface AboutPageTemplateData {
  heroBannerSection: HeroBannerProps;
  servicesSection: ServicesProps;
}

const AboutPageTemplate: React.FC<AboutPageTemplateData> = ({ heroBannerSection, servicesSection }) => {
  return (
    <>
      <HeroBanner {...heroBannerSection} />
      <Services {...servicesSection} />
    </>
  );
};

export default AboutPageTemplate;

export function useAboutPageStaticQuery(): AboutPageTemplateData & { SEO: SeoProps } {
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
