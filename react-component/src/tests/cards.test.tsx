import { render, screen } from '@testing-library/react';
import { CardList } from '../components/mainCards/cards';
import React from 'react';
import data from '../assets/data/data.json';

test('There are all cards', () => {
  render(<CardList />);
  const matches = screen.getAllByText('Average Height:');
  expect(matches.length).toBe(data.breeds.length);
});
