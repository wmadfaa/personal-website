import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import Container from '../../components/Base/Container/Container';
import TitleSection from '../../components/Base/TitleSection/TitleSection';
import Timeline from '../../components/Base/Timeline/Timeline';

const ResumePreview: React.FC<PreviewTemplateComponentProps> = ({ entry, fieldsMetaData }) => {
  const data = entry.getIn(['data']).toJS();

  console.log(data, fieldsMetaData.toJS(), fieldsMetaData.getIn(['educations', 'educations'])?.toJS());

  return <div></div>;

  //   return (
  //     <>
  //       <Container section>
  //         <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

  //         {experiences.map((item) => {
  //           //   return (
  //           //     <Timeline
  //           //       key={id}
  //           //       title={company}
  //           //       subtitle={position}
  //           //       content={widgetFor('body')}
  //           //       startDate={startDate}
  //           //       endDate={endDate}
  //           //     />
  //           //   );
  //         })}
  //       </Container>
  //     </>
  //   );
};

export default ResumePreview;
