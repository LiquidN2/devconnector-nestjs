import React from 'react';

import ContentBox from '../content-box/content-box.component';
import { Badge } from '../UI/badge.component';
import { SkillsContainer } from './profile-skills.styles';

const ProfileSkills: React.FC = () => {
  const skills = [
    'Javascript',
    'React',
    'Nextjs',
    'Nodejs',
    'Nestjs',
    'Express',
    'MongoDB',
    'NoSQL',
    'HTML',
    'Sass',
    'Webpack',
    'Parcel',
  ];

  return skills.length !== 0 ? (
    <ContentBox heading="Technical Skills">
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </SkillsContainer>
    </ContentBox>
  ) : null;
};

export default ProfileSkills;
