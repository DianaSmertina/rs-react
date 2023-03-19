import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component<{ title: string }, object> {
  constructor(props: { title: string }) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h1 className="header__title">{this.props.title}</h1>
        <nav className="header__navigation">
          <NavLink to="/">Main</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    );
  }
}
