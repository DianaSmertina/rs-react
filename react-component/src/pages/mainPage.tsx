import React from 'react';
import { SearchBar } from '../components/searchBar';
import { Cards } from '../components/cards';
import { Header } from '../components/header';

export class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header title="Main page" />
        <main>
          <SearchBar />
          <Cards />
        </main>
      </>
    );
  }
}
