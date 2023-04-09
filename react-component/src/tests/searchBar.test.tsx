import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../components/searchBar';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

test('There is search bar', () => {
  render(<SearchBar onSumbit={(text: string) => console.log(text)} />);
  expect(screen.getByRole('searchbox')).toBeInTheDocument();
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'abc' } });
  expect(screen.getByRole<HTMLInputElement>('searchbox').value).toBe('abc');
});
