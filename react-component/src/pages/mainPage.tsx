import React from 'react';
import { SearchBar } from '../components/searchBar';
import { CardList } from '../components/mainCards/cards';

export class MainPage extends React.Component {
  render() {
    return (
      <main>
        <h1>Main page</h1>
        <SearchBar />
        <CardList />
      </main>
    );
  }
}
