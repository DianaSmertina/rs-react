import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../pages/notFound';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

test('Renders 404 Not Found page correctly', () => {
  render(
    <BrowserRouter>
      <ErrorPage />
    </BrowserRouter>
  );
  expect(screen.getByText('Error 404. Page not found')).toBeInTheDocument();
});
