import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from '../Base/Timeline/Timeline';
import Container from '../Base/Container/Container';
import TitleSection from '../Base/TitleSection/TitleSection';

interface Experience {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Experience: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "experiences section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
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
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const experiences: Experience[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {experiences.map((item) => {
        const {
          id,
          html,
          frontmatter: { company, position, startDate, endDate },
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={position}
            content={
              <span
                className="format-html"
                dangerouslySetInnerHTML={{
                  __html: html as any,
                }}
              />
            }
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
