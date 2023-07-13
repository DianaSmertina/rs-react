import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/header';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

test('links in the header work', () => {
  render(
    <BrowserRouter>
      <Header title="Main page" />
    </BrowserRouter>
  );

  const main = screen.getByText('Main');
  const about = screen.getByText('About');
  expect(main).toBeInTheDocument();
  expect(about).toBeInTheDocument();

  fireEvent.click(main);
  expect(window.location.pathname).toBe('/');

  fireEvent.click(about);
  expect(window.location.pathname).toBe('/about');
});
