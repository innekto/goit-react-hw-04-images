import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VscSearch } from 'react-icons/vsc';
import { VscSearchStop } from 'react-icons/vsc';
import {
  SearchField,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchField.styled';

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
  };

  state = { querySearch: '' };

  onHandleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ querySearch: value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.querySearch.trim()) return;
    this.props.onSubmit(this.state.querySearch.trim());
  };

  render() {
    const { querySearch } = this.state;

    return (
      <SearchField>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton
            type="submit"
            disabled={this.props.status === 'pending'}
          >
            {this.props.status === 'pending' ? (
              <VscSearchStop />
            ) : (
              <VscSearch />
            )}
            {/* <VscSearchStop />
            <VscSearch /> */}
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="query"
            value={querySearch}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            onChange={this.onHandleChange}
          />
        </SearchForm>
      </SearchField>
    );
  }
}
