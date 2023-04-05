import { useState } from 'react';
import PropTypes from 'prop-types';
import { VscSearch, VscSearchStop } from 'react-icons/vsc';

import { SearchForm, SearchFormButton, Input } from './SearchBar.styled';

export const SearchBar = ({ getQuery, status }) => {
  const [querySearch, setQuerySearch] = useState('');

  const onHandleChange = e => {
    const { value } = e.currentTarget;
    setQuerySearch(value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!querySearch.trim()) return;
    getQuery(querySearch.trim().toLowerCase());
    setQuerySearch('');
  };

  return (
    <SearchForm onSubmit={onHandleSubmit}>
      <SearchFormButton type="submit" disabled={status === 'pending'}>
        {status === 'pending' ? <VscSearchStop /> : <VscSearch />}
      </SearchFormButton>
      <Input
        type="text"
        name="query"
        value={querySearch}
        placeholder="Search images and photos"
        autoComplete="off"
        autoFocus
        onChange={onHandleChange}
      />
    </SearchForm>
  );
};

SearchBar.propTypes = { getQuery: PropTypes.func.isRequired };
