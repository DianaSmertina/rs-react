import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header className="header">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/form">Form</NavLink>
      </header>
      <Outlet />
    </>
  );
}
