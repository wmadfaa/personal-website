import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import Timeline from '../../components/Base/Timeline/Timeline';
import Container from '../../components/Base/Container/Container';

const EducationPreview: React.FC<PreviewTemplateComponentProps> = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <Container section>
      <Timeline
        title={data.university}
        subtitle={data.degree}
        content={widgetFor('body')}
        startDate={data.startDate}
        endDate={data.endDate}
      />
    </Container>
  );
};

export default EducationPreview;
