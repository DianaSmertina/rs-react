import React from 'react';
import { SearchBar } from '../components/searchBar';
import { Cards } from '../components/cards';

export class MainPage extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        <Cards />
      </main>
    );
  }
}
