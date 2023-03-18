import React from 'react';
import { SearchBar } from '../components/searchBar';
import { Cards } from '../components/cards';

export class MainPage extends React.Component {
  render() {
    return (
      <main>
        <h1>Main page</h1>
        <SearchBar />
        <Cards />
      </main>
    );
  }
}
