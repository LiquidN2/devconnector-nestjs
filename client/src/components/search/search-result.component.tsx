import React from 'react';

import ContentBox from '../content-box/content-box.component';
import SearchResultItemUser from './search-resrult-item-user.component';

import { useSearch } from '../../hooks/useSearch';

interface SearchResultProps {
  type: string;
}

const SearchResult: React.FC = () => {
  const { data } = useSearch();

  return (
    <ContentBox heading="Results">
      {data &&
        data.people &&
        data.people.map(
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
  );
};

export default SearchResult;
