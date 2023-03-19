import { render, screen } from '@testing-library/react';
import React from 'react';
import { AboutPage } from '../pages/about';
import '@testing-library/jest-dom/extend-expect';

test('Renders about page correctly', () => {
  render(<AboutPage />);
  expect(screen.getByText('About us page')).toBeInTheDocument();
});
