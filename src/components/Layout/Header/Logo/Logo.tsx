import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import styles from './Logo.module.css';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
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
  const logoImage: FluidObject | FluidObject[] = placeholderImage.childImageSharp.fluid;

  return (
    <Link to="/">
      <figure className={styles.imgPlaceholder}>
        <Img className={styles.img} fluid={logoImage} alt={logoTitle} />
      </figure>
      <h1 className={styles.ownerName}>{logoTitle}</h1>
    </Link>
  );
};

export default Logo;
