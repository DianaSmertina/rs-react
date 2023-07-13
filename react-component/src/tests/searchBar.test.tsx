import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../components/searchBar';
import { renderWithProviders } from '../utils/testUtils';

test('There is the search bar', () => {
  renderWithProviders(<SearchBar />);
  const searchBox = screen.getByRole('searchbox');
  expect(searchBox).toBeInTheDocument();
  fireEvent.change(searchBox, { target: { value: 'rick' } });
  expect((searchBox as HTMLInputElement).value).toBe('rick');
  const resetBtn = screen.getByTestId('search-reset');
  fireEvent.click(resetBtn);
  expect((searchBox as HTMLInputElement).value).toBe('');
});
