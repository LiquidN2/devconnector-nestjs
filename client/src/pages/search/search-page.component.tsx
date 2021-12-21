import React from 'react';

import SearchResult from '../../components/search/search-result.component';

import {
  ContentContainer,
  ColLeftSpan,
  ColRight,
} from '../../components/layout/content-layout.styles';

const SearchPage: React.FC = () => {
  return (
    <ContentContainer>
      <ColLeftSpan>
        <SearchResult />
      </ColLeftSpan>
      <ColRight>Filter Box</ColRight>
    </ContentContainer>
  );
};

export default SearchPage;
