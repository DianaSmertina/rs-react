import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
        </header>
        <Outlet />
      </>
    );
  }
}
