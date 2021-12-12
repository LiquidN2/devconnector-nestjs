import React from 'react';

import ContentBox from '../content-box/content-box.component';
import { Badge } from '../UI/badge.component';
import { SkillsContainer } from './profile-skills.styles';
import { useProfile } from '../../hooks/useProfile';

interface ProfileSkillsProps {
  profileId?: string;
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({ profileId = '' }) => {
  const { data } = useProfile(profileId);

  return data && data.skills.length !== 0 ? (
    <ContentBox heading="Technical Skills">
      <SkillsContainer>
        {data.skills.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </SkillsContainer>
    </ContentBox>
  ) : null;
};

export default ProfileSkills;
