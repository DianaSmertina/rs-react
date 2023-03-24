import { render, screen } from '@testing-library/react';
import React from 'react';
import { AboutPage } from '../pages/aboutPage';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

test('Renders about page correctly', () => {
  render(
    <BrowserRouter>
      <AboutPage />
    </BrowserRouter>
  );
  expect(screen.getByText('About us page')).toBeInTheDocument();
});
