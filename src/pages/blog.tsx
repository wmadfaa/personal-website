import React from 'react';

import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import TitleSection from '../components/Base/TitleSection/TitleSection';
import Container from '../components/Base/Container/Container';
import { useBlogPageQuery } from '../graphql/blog-page';
import { CardProps } from '../components/Base/Card/Card';

const BlogPage: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useBlogPageQuery();

  const { SEO, title, subtitle } = markdownRemark.frontmatter;

  const posts: Array<CardProps> = allMarkdownRemark.edges.map(
    ({
      node: {
        fields,
        frontmatter: { title, description, date, tags, cover },
      },
    }) => ({
      slug: fields.slug,
      title,
      date,
      description,
      tags,
      img: cover.childImageSharp.fluid,
    }),
  );

  return (
    <Layout seo={SEO}>
      <Container section>
        <TitleSection title={title} subtitle={subtitle} center />
        <Posts posts={posts} />
      </Container>
    </Layout>
  );
};

export default BlogPage;
