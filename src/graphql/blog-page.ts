import { useStaticQuery, graphql } from 'gatsby';
import { DeepNonNullable } from 'utility-types';
import { BlogPageQuery } from '../../graphql-types';

export function useBlogPageQuery() {
  return useStaticQuery<DeepNonNullable<BlogPageQuery>>(graphql`
    query BlogPage {
      markdownRemark(frontmatter: { template_key: { eq: "blog-page" } }) {
        frontmatter {
          SEO {
            title
          }
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { template_key: { eq: "post" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
}
