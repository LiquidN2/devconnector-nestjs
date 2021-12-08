import React from 'react';

import {
  BoxContainer,
  BoxHeadingContainer,
  BoxHeading,
  BoxSubHeading,
} from './connection-box.styles';

interface ConnectionBoxProps {
  heading: string;
  subHeading: string;
}

const ConnectionBox: React.FC<ConnectionBoxProps> = ({
  heading,
  subHeading,
  children,
}) => {
  return (
    <BoxContainer>
      <BoxHeadingContainer>
        <BoxHeading>{heading}</BoxHeading>
        <BoxSubHeading>{subHeading}</BoxSubHeading>
      </BoxHeadingContainer>
      {children}
    </BoxContainer>
  );
};

export default ConnectionBox;
