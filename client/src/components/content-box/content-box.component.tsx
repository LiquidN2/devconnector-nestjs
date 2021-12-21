import React from 'react';

import {
  BoxContainer,
  BoxHeadingSolo,
  BoxHeadingContainer,
  BoxHeading,
  BoxSubHeading,
} from './content-box.styles';

interface ContentBoxProps {
  heading: string;
  headingAlign?: 'left' | 'center';
  subHeading?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  heading,
  headingAlign = 'left',
  subHeading,
  children,
}) => {
  return (
    <BoxContainer>
      {!subHeading && (
        <BoxHeadingSolo style={{ textAlign: headingAlign }}>
          {heading}
        </BoxHeadingSolo>
      )}
      {subHeading && (
        <BoxHeadingContainer>
          <BoxHeading>{heading}</BoxHeading>
          <BoxSubHeading>{subHeading}</BoxSubHeading>
        </BoxHeadingContainer>
      )}
      {children}
    </BoxContainer>
  );
};

export default ContentBox;
