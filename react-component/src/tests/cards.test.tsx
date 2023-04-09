import { render, screen } from '@testing-library/react';
import { CardList } from '../components/mainCards/cards';
import React from 'react';
import data from '../assets/data/data.json';
import { server } from '../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockedFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

global.fetch = mockedFetch;

test('There are all cards', () => {
  render(<CardList />);
  const matches = screen.getAllByText('Average Height:');
  expect(matches.length).toBe(data.breeds.length);
});
