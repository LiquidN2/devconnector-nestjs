import React from 'react';

import ContentBox from '../content-box/content-box.component';
import { Badge } from '../UI/badge.component';
import { SkillsContainer } from './profile-skills.styles';
import { useProfile, useProfileWithUserId } from '../../hooks/useProfile';

interface ProfileSkillsProps {
  profileId?: string;
  userId?: string;
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({
  profileId = '',
  userId = '',
}) => {
  const { data } = useProfileWithUserId(userId);

  return data && data.skills.length !== 0 ? (
    <ContentBox heading="Technical Skills">
      <SkillsContainer>
        {data.skills.map((skill, index) =>
          skill ? <Badge key={index}>{skill}</Badge> : null,
        )}
      </SkillsContainer>
    </ContentBox>
  ) : null;
};

export default ProfileSkills;
