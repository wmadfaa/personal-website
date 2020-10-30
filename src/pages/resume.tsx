import React from 'react';
import { flatMap, sortBy } from 'lodash';
import Layout from '../components/Layout/Layout';
import { useResumePageQuery } from '../graphql/resume-page';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';

const ResumePage: React.FC = () => {
  const { markdownRemark } = useResumePageQuery();

  const { SEO, experience, education } = markdownRemark.frontmatter;

  const experiences = sortBy(
    flatMap(experience.timeline, ({ html, frontmatter }) => ({ body: html, ...frontmatter })),
    ({ startDate }) => new Date(startDate).getTime(),
  ).reverse();

  const educations = sortBy(
    flatMap(education.timeline, ({ html, frontmatter }) => ({ body: html, ...frontmatter })),
    ({ startDate }) => new Date(startDate).getTime(),
  ).reverse();

  return (
    <Layout seo={SEO}>
      <Experience title={experience.title} subtitle={experience.subtitle} experiences={experiences} />
      <hr />
      <Education title={education.title} subtitle={education.subtitle} educations={educations} />
    </Layout>
  );
};

export default ResumePage;
