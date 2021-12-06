import React from 'react';

import { BoxContainer, BoxHeading } from './content-box.styles';

interface ContentBoxProps {
  heading: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ heading, children }) => {
  return (
    <BoxContainer>
      <BoxHeading>{heading}</BoxHeading>
      {children}
    </BoxContainer>
  );
};

export default ContentBox;
