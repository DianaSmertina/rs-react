import 'whatwg-fetch';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ModalCardInfo } from '../components/mainCards/modalCardInfo';

test('Modal window with card info renders', async () => {
  render(<ModalCardInfo id={1} onClick={() => 1} />);
  const locationField = await screen.findByText('Location:');
  expect(locationField).toBeInTheDocument();
});
