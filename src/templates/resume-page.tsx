import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SeoProps } from '../components/Layout/SEO/index';
import Experience, { ExperienceTimelineData } from '../components/Experience/Experience';
import Education, { EducationTimelineData } from '../components/Education/Education';
import { TitleSectionData } from '../components/Base/TitleSection/TitleSection';
import { HTMLContentProps } from '../components/Base/HTMLContent/HTMLContent';

export interface ResumePageTemplateData {
  experienceSection: TitleSectionData;
  experiences: ExperienceTimelineData[];
  educationSection: TitleSectionData;
  educations: EducationTimelineData[];
}

export interface ResumePageTemplateProps extends ResumePageTemplateData {
  contentComponent?: React.ElementType<HTMLContentProps>;
}

const ResumePageTemplate: React.FC<ResumePageTemplateProps> = ({
  contentComponent,
  experienceSection,
  experiences,
  educationSection,
  educations,
}) => {
  return (
    <>
      <Experience
        title={experienceSection.title}
        subtitle={experienceSection.subtitle}
        experiences={experiences.reverse()}
        contentComponent={contentComponent}
      />
      {/* <hr />
      <Education
        title={educationSection.title}
        subtitle={educationSection.subtitle}
        educations={educations.reverse()}
        contentComponent={contentComponent}
      /> */}
    </>
  );
};

export default ResumePageTemplate;

export function useResumePageStaticQuery(): ResumePageTemplateData & { SEO: SeoProps } {
  const {
    markdownRemark: {
      frontmatter: { SEO, experience, education },
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "resume page" } }) {
        frontmatter {
          SEO {
            title
          }
          experience {
            title
            subtitle
            experiences {
              frontmatter {
                company
                position
                startDate
                endDate
              }
              html
            }
          }
          education {
            title
            subtitle
            educations {
              frontmatter {
                university
                degree
                startDate
                endDate
              }
              html
            }
          }
        }
      }
    }
  `);

  const format = (data: any[]) => {
    return data.map(({ html, frontmatter }) => ({ ...frontmatter, body: html }));
  };

  return {
    SEO,
    experienceSection: { title: experience.title, subtitle: experience.subtitle },
    experiences: format(experience.experiences),
    educationSection: { title: education.title, subtitle: education.subtitle },
    educations: format(education.educations),
  };
}
