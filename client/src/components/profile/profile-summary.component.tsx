import React from 'react';

import ContentBox from '../content-box/content-box.component';
import { Paragraph } from '../UI/paragraph.component';

import { useProfile } from '../../hooks/useProfile';

interface ProfileSummaryProps {
  profileId?: string;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ profileId = '' }) => {
  const { data } = useProfile(profileId);

  return data ? (
    <ContentBox heading="About Me">
      <Paragraph>{data.about}</Paragraph>
    </ContentBox>
  ) : null;
};

export default ProfileSummary;
