import React from 'react';

import styles from './Posts.module.css';
import Card, { CardProps } from '../Base/Card/Card';

const Posts: React.FC<{ posts: Array<CardProps> }> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((postProps) => (
        <div className={styles.post} key={postProps.slug}>
          <Card {...postProps} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
