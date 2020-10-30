import React from 'react';

import Timeline from '../Base/Timeline/Timeline';
import Container from '../Base/Container/Container';
import TitleSection from '../Base/TitleSection/TitleSection';
import HTMLContent from '../Base/HTMLContent/HTMLContent';
import { HTMLContentProps } from '../Base/HTMLContent/HTMLContent';
import { TitleSectionData } from '../Base/TitleSection/TitleSection';

export interface ExperienceProps extends TitleSectionData {
  experiences: Array<{ body: string; company: string; endDate: string; position: string; startDate: string }>;
  contentComponent?: React.ElementType<HTMLContentProps>;
}

const Experience: React.FC<ExperienceProps> = ({ title, subtitle, experiences, contentComponent }) => {
  const Content = contentComponent || HTMLContent;

  return (
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />

      {experiences.map(({ body, company, position, endDate, startDate }, index) => {
        const content = <Content content={body} />;
        return (
          <Timeline
            key={index}
            title={company}
            subtitle={position}
            content={content}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
