import { useStaticQuery, graphql } from 'gatsby';
import { DeepNonNullable } from 'utility-types';
import { ResumePageQuery } from '../../graphql-types';

export function useResumePageQuery() {
  return useStaticQuery<DeepNonNullable<ResumePageQuery>>(graphql`
    query ResumePage {
      markdownRemark(frontmatter: { template_key: { eq: "resume-page" } }) {
        frontmatter {
          SEO {
            title
          }
          education {
            title
            subtitle
            timeline {
              html
              frontmatter {
                university
                degree
                startDate
                endDate
              }
            }
          }
          experience {
            title
            subtitle
            timeline {
              html
              frontmatter {
                company
                position
                startDate
                endDate
              }
            }
          }
        }
      }
    }
  `);
}
