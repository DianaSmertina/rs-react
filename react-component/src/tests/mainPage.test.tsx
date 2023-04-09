import { render, screen } from '@testing-library/react';
import React from 'react';
import { MainPage } from '../pages/mainPage';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
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

test('Renders main page correctly', () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  expect(screen.getByText('Main page')).toBeInTheDocument();
});
