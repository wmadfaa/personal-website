import React from 'react';

import InfoBlock from '../Base/InfoBlock/InfoBlock';
import Container from '../Base/Container/Container';
import TitleSection from '../Base/TitleSection/TitleSection';
import { IconProps } from '../Base/Icon/Icon';

import styles from './ContactsInfo.module.css';

export interface ContactsProps {
  title: string;
  subtitle: string;
  contacts: Array<{ title: string; content: string; icon: IconProps | string }>;
}

const ContactsInfo: React.FC<ContactsProps> = ({ title, subtitle, contacts }) => {
  return (
    <Container section>
      <TitleSection title={title} subtitle={subtitle} center />
      <div className={styles.contactInfos}>
        {contacts.map(({ icon, title, content }, index) => (
          <InfoBlock key={index} icon={icon as IconProps} title={title} content={content} center />
        ))}
      </div>
    </Container>
  );
};

export default ContactsInfo;
