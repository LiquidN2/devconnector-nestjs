import React from 'react';

import ContentBox from '../content-box/content-box.component';
import SearchResultItemUser from './search-result-item-user.component';

import { useSearch } from '../../hooks/useSearch';

const SearchResult: React.FC = () => {
  const { data } = useSearch();
  const results = data && data.people ? data.people : [];

  return results.length !== 0 ? (
    <ContentBox heading="Results" subHeading={`${results.length} result(s)`}>
      {results.map(
        ({ _id, name, email, avatar, status, company, location }, index) => (
          <SearchResultItemUser
            key={index}
            userId={_id}
            name={name}
            email={email}
            avatar={avatar}
            profileStatus={status}
            company={company}
            location={location}
          />
        ),
      )}
    </ContentBox>
  ) : (
    <p>No result</p>
  );
};

export default SearchResult;
