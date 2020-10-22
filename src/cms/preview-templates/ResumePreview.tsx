import React from 'react';
import marked from 'marked';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import HTMLContent, { HTMLContentProps } from '../../components/Base/HTMLContent/HTMLContent';
import ResumePageTemplate from '../../templates/resume-page';

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
    <ResumePageTemplate
      contentComponent={CustomHTMLContent}
      experienceSection={data.experience}
      experiences={data.experience.experiences.map((experienceId: string) => experiences.get(experienceId).toJS())}
      educationSection={data.education}
      educations={data.education.educations.map((educationId: string) => educations.get(educationId).toJS())}
    />
  );
};

export default ResumePreview;
