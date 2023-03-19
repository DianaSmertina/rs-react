import { render, screen } from '@testing-library/react';
import { Cards } from '../components/cards';
import React from 'react';
import data from '../assets/data/data.json';

test('There are all cards', () => {
  render(<Cards />);
  const matches = screen.getAllByText('Average Height:');
  expect(matches.length).toBe(data.breeds.length);
});
