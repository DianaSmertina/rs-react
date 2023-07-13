import 'whatwg-fetch';
import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { CardList } from '../components/mainCards/cards';
import { renderWithProviders } from '../utils/testUtils';

test('Cards render', async () => {
  renderWithProviders(<CardList onClick={(cardId: number) => cardId} />);
  const characterName = await screen.findByText('Rick Sanchez');
  expect(characterName).toBeInTheDocument();
});
