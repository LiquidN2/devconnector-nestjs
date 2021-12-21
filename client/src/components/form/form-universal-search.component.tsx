import React, { FormEventHandler, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import IconSearch from '../icons/icon-search.component';

import { SearchContainer, SearchInput } from './form-universal-search.styles';

import { useActions } from '../../hooks/useActions';
import { useSearch } from '../../hooks/useSearch';

const FormUniversalSearch: React.FC = () => {
  const [inputQuery, setInputQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { setQuery } = useActions();
  const { refetch } = useSearch();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    const query = inputQuery.trim();
    if (!query) return;
    setQuery(query);
    refetch();
    if (location.pathname.startsWith('/searches')) return;
    navigate('/searches');
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <IconSearch
        style={{
          transform: 'translateX(3rem)',
          height: '1.6rem',
          width: '1.6rem',
        }}
      />
      <SearchInput
        type="text"
        name="search"
        id="search"
        value={inputQuery}
        onChange={e => setInputQuery(e.currentTarget.value)}
        placeholder="Search for people to connect"
      />
    </SearchContainer>
  );
};

export default FormUniversalSearch;
