import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { PopUp } from '../components/form/popUp';

test('PopUp renders', () => {
  render(<PopUp />);
  expect(screen.getByText('Data saved')).toBeInTheDocument();
});
