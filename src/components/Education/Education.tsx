import React from 'react';

import Timeline from '../Base/Timeline/Timeline';
import Container from '../Base/Container/Container';
import TitleSection from '../Base/TitleSection/TitleSection';
import HTMLContent from '../Base/HTMLContent/HTMLContent';
import { HTMLContentProps } from '../Base/HTMLContent/HTMLContent';
import { TitleSectionData } from '../Base/TitleSection/TitleSection';

export interface EducationProps extends TitleSectionData {
  educations: Array<{ body: string; university: string; degree: string; endDate: string; startDate: string }>;
  contentComponent?: React.ElementType<HTMLContentProps>;
}

const Education: React.FC<EducationProps> = ({ title, subtitle, educations, contentComponent }) => {
  const Content = contentComponent || HTMLContent;

  return (
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />

      {educations.map(({ body, university, degree, endDate, startDate }, index) => {
        const content = <Content content={body} />;
        return (
          <Timeline
            key={index}
            title={university}
            subtitle={degree}
            content={content}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Education;
