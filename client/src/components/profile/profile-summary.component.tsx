import React from 'react';

import ContentBox from '../content-box/content-box.component';
import { Paragraph } from '../UI/paragraph.component';

const ProfileSummary: React.FC = () => {
  const summary =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic excepturi! Ea, culpa rem quae officiis distinctio animi nihil.';
  return summary ? (
    <ContentBox heading="About Me">
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore
        dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit
        reiciendis hic excepturi! Ea, culpa rem quae officiis distinctio animi
        nihil.
      </Paragraph>
    </ContentBox>
  ) : null;
};

export default ProfileSummary;
