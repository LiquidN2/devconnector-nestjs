import React from 'react';

import { Paragraph } from '../UI/paragraph.component';
import { ContentContainer } from './post-content.styles';

interface PostContentProps {
  text: string;
}

const PostContent: React.FC<PostContentProps> = ({ text }) => {
  return (
    <ContentContainer>
      <Paragraph>{text}</Paragraph>
    </ContentContainer>
  );
};

export default PostContent;
