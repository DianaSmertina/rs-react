import 'whatwg-fetch';
import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { ModalCardInfo } from '../components/mainCards/modalCardInfo';
import { renderWithProviders } from '../utils/testUtils';

test('Modal window with card info renders', async () => {
  renderWithProviders(<ModalCardInfo id={1} onClick={() => 1} />);
  const locationField = await screen.findByText('Location:');
  expect(locationField).toBeInTheDocument();
});
