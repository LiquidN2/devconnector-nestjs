import React from 'react';

import ContentBox from '../content-box/content-box.component';
import { Paragraph } from '../UI/paragraph.component';

import { useProfile, useProfileWithUserId } from '../../hooks/useProfile';

interface ProfileSummaryProps {
  userId?: string;
  profileId?: string;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  userId = '',
  profileId = '',
}) => {
  const { data } = useProfileWithUserId(userId);

  return data ? (
    <ContentBox heading="About Me">
      <Paragraph>{data.about}</Paragraph>
    </ContentBox>
  ) : null;
};

export default ProfileSummary;
