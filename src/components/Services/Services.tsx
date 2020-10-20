import React from 'react';

import InfoBlock from '../Base/InfoBlock/InfoBlock';
import Container from '../Base/Container/Container';
import TitleSection from '../Base/TitleSection/TitleSection';
import { IconProps } from '../Base/Icon/Icon';

import styles from './Services.module.css';

interface Service {
  title: string;
  icon: IconProps;
  description: string;
}

export interface ServicesProps {
  title: string;
  subtitle: string;
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ title, subtitle, services }) => {
  return (
    <Container section>
      <TitleSection title={title} subtitle={subtitle} center />
      <div className={styles.services}>
        {services.map(({ icon, title, description }, index) => (
          <InfoBlock key={index} icon={icon} title={title} content={description} />
        ))}
      </div>
    </Container>
  );
};

export default Services;
