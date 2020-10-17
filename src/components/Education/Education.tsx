import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from '../Base/Timeline/Timeline';
import Container from '../Base/Container/Container';
import TitleSection from '../Base/TitleSection/TitleSection';

interface Education {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      university: string;
      degree: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Education: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "education section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "education" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              university
              degree
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const education: Education[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {education.map((item) => {
        const {
          id,
          html,
          frontmatter: { university, degree, startDate, endDate },
        } = item.node;

        return (
          <Timeline
            key={id}
            title={university}
            subtitle={degree}
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

export default Education;
