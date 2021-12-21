import React from 'react';

import {
  ContentContainer,
  ColLeftSpan,
  ColRight,
} from '../../components/layout/content-layout.styles';

const SearchPage: React.FC = () => {
  return (
    <ContentContainer>
      <ColLeftSpan>Search results</ColLeftSpan>
      <ColRight>Filter Box</ColRight>
    </ContentContainer>
  );
};

export default SearchPage;
