import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import { CardList } from '../components/mainCards/cards';
import React from 'react';

test('There are all cards', async () => {
  render(<CardList search="rick" onClick={(cardId: number) => console.log(cardId)} />);
  const ddd = await screen.findByText('Rick Sanchez');
  expect(ddd).toBeDefined();
});
