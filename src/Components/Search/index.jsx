import React from 'react';
import { useState } from 'react';
import { SearchContainer, SearchIcon, SearchInput } from './Style';

export default function Search({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false);

  const inputSearch = ({ target }) => {
    setSearchTerm(target.value);
  };
  return (
    <SearchContainer>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="./images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={inputSearch}
        placeholder="Search filmes and series"
        active={searchActive}
      />
    </SearchContainer>
  );
}
