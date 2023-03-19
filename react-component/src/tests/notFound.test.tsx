import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../pages/notFound';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

test('Renders 404 Not Found page correctly', () => {
  render(<ErrorPage />);
  expect(screen.getByText('Error 404. Page not found')).toBeInTheDocument();
});
