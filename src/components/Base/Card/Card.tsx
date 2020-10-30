import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import styles from './Card.module.css';

export interface CardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: Array<string>;
  img: FluidObject | Array<FluidObject>;
}

const Card: React.FC<CardProps> = ({ slug, img, title, date, description, tags }) => {
  return (
    <Link to={slug}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
        <div className={styles.card}>
          <figure className={styles.image}>
            <Img fluid={img} alt={title} />
          </figure>
          <div className={styles.content}>
            <h3 className={styles.date}>{date}</h3>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.tags}>
            {tags.map((item) => (
              <span className={styles.tag} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
