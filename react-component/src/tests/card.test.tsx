import { render, screen } from '@testing-library/react';
import React from 'react';
import { Character } from '../types/types';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components/mainCards/cardTemplate';

const cardObj: Character = {
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
};

test('Card renders', () => {
  render(<Card card={cardObj} />);
  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
});
