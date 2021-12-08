import React from 'react';

import { Paragraph } from '../UI/paragraph.component';
import { ContentContainer } from './post-content.styles';

const PostContent: React.FC = () => {
  return (
    <ContentContainer>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eos
        nisi autem nihil expedita magni sequi doloribus excepturi illum! Soluta
        et quasi provident recusandae nostrum eius deserunt ipsa fugiat sit.
      </Paragraph>
    </ContentContainer>
  );
};

export default PostContent;
