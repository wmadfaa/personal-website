import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import styles from './Logo.module.css';

const Logo: React.FC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;

  return (
    <Link className={styles.logo} to="/">
      <h1 className={styles.ownerName}>{logoTitle}</h1>
    </Link>
  );
};

export default Logo;
