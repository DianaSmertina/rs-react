import { Header } from '../components/header';
import React from 'react';

export class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <Header title="Not found" />
        <h1>Error 404. Page not found</h1>
      </>
    );
  }
}
