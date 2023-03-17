import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/about">About</NavLink>
        </header>
        <Outlet />
      </>
    );
  }
}
