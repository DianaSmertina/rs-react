import React, { useState } from 'react';
import { SearchBar } from '../components/searchBar';
import { CardList } from '../components/mainCards/cards';

export function MainPage() {
  const [searchText, setSearchText] = useState('');

  const mainHandleSubmit = (text: string) => {
    setSearchText(text);
  };

  return (
    <main>
      <h1>Main page</h1>
      <SearchBar onSumbit={(text: string) => mainHandleSubmit(text)} />
      <CardList search={searchText} />
    </main>
  );
}
