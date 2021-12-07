import React from 'react';

import ContentBox from '../content-box/content-box.component';
import { Paragraph } from '../UI/paragraph.component';
import { ButtonPrimary } from '../UI/button.component';

const ProfileSummary: React.FC = () => {
  const summary =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in delenit.';

  // const summary = '';

  return summary ? (
    <ContentBox heading="About Me">
      <Paragraph>{summary}</Paragraph>
    </ContentBox>
  ) : (
    <ButtonPrimary>Add Your Introduction</ButtonPrimary>
  );
};

export default ProfileSummary;
