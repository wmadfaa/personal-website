import React from 'react';

import Banner from '../Base/Banner/Banner';

export interface HeroBannerProps {
  role: string;
  greeting: string;
  aboutMe: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ role, greeting, aboutMe }) => {
  return <Banner title={role} subtitle={greeting} content={aboutMe} linkTo="/resume/" linkText="My Resume" />;
};

export default HeroBanner;
