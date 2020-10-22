import React from 'react';
import marked from 'marked';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import Education from '../../components/Education/Education';
import Experience from '../../components/Experience/Experience';
import HTMLContent, { HTMLContentProps } from '../../components/Base/HTMLContent/HTMLContent';

const CustomHTMLContent: React.FC<HTMLContentProps> = ({ content, ...props }) => {
  return <HTMLContent {...props} content={marked(content)} />;
};

const ResumePreview: React.FC<PreviewTemplateComponentProps> = ({ entry, fieldsMetaData }) => {
  const data = entry.getIn(['data']).toJS();
  const experiences = fieldsMetaData.getIn(['experience', 'experiences', 'experiences']);
  const educations = fieldsMetaData.getIn(['education', 'educations', 'educations']);

  if (!data || !experiences || !educations) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Experience
        title={data.experience.title}
        subtitle={data.experience.subtitle}
        experiences={data.experience.experiences.map((experienceId: string) => experiences.get(experienceId).toJS())}
        contentComponent={CustomHTMLContent}
      />
      <hr />
      <Education
        title={data.education.title}
        subtitle={data.education.subtitle}
        educations={data.education.educations.map((educationId: string) => educations.get(educationId).toJS())}
        contentComponent={CustomHTMLContent}
      />
    </>
  );
};

export default ResumePreview;
