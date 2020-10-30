import React from 'react';

import Banner from '../Base/Banner/Banner';

export interface HeroBannerProps {
  role: string;
  greeting: string;
  bio: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ role, greeting, bio }) => {
  return <Banner title={role} subtitle={greeting} content={bio} linkTo="/resume/" linkText="My Resume" />;
};

export default HeroBanner;
