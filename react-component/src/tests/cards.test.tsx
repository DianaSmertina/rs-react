import 'whatwg-fetch';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardList } from '../components/mainCards/cards';

test('Cards render', async () => {
  render(<CardList search="rick" onClick={(cardId: number) => cardId} />);
  const characterName = await screen.findByText('Rick Sanchez');
  expect(characterName).toBeInTheDocument();
});
