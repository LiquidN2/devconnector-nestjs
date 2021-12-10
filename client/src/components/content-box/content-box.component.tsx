import React from 'react';

import { BoxContainer, BoxHeading } from './content-box.styles';

interface ContentBoxProps {
  heading: string;
  headingAlign?: 'left' | 'center';
}

const ContentBox: React.FC<ContentBoxProps> = ({
  heading,
  headingAlign = 'left',
  children,
}) => {
  return (
    <BoxContainer>
      <BoxHeading style={{ textAlign: headingAlign }}>{heading}</BoxHeading>
      {children}
    </BoxContainer>
  );
};

export default ContentBox;
