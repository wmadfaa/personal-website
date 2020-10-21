import { useStaticQuery, graphql } from 'gatsby';

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

export function useSiteMetadata(): SiteMetadata {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return siteMetadata;
}
