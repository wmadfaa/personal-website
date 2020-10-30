import { useStaticQuery, graphql } from 'gatsby';
import { DeepNonNullable } from 'utility-types';
import { AboutPageQuery } from '../../graphql-types';

function useAboutPageQuery() {
  return useStaticQuery<DeepNonNullable<AboutPageQuery>>(graphql`
    query AboutPage {
      markdownRemark(frontmatter: { template_key: { eq: "about-page" } }) {
        frontmatter {
          SEO {
            title
          }
          heroBannerSection {
            role
            greeting
            bio
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
}

export default useAboutPageQuery;
