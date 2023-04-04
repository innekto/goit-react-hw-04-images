import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VscSearch, VscSearchStop } from 'react-icons/vsc';
import {
  SearchField,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchField.styled';

export function SearchBar({ onSubmit, status }) {
  const [querySearch, setQuerySearch] = useState('');

  const onHandleChange = e => {
    const { value } = e.currentTarget;
    setQuerySearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!querySearch.trim()) return;
    onSubmit(querySearch.trim());
  };

  return (
    <SearchField>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" disabled={status === 'pending'}>
          {status === 'pending' ? <VscSearchStop /> : <VscSearch />}
        </SearchFormButton>
        <SearchFormInput
          type="text"
          name="query"
          value={querySearch}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          onChange={onHandleChange}
        />
      </SearchForm>
    </SearchField>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};
