import React, { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconSearch from '../icons/icon-search.component';

import { SearchContainer, SearchInput } from './form-universal-search.styles';

import { useActions } from '../../hooks/useActions';

const FormUniversalSearch: React.FC = () => {
  const [inputQuery, setInputQuery] = useState('');
  const navigate = useNavigate();
  const { setQuery } = useActions();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    const query = inputQuery.trim();
    if (!query) return;
    setQuery(query);
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
