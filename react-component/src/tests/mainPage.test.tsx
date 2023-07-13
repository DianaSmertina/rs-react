import 'whatwg-fetch';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import { MainPage } from '../pages/mainPage';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../utils/testUtils';

test('Open modal window by card click', async () => {
  renderWithProviders(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  expect(screen.getByText('Main page')).toBeInTheDocument();

  const rickCard = await screen.findByText('Rick Sanchez');
  fireEvent.click(rickCard);
  const modalText = await screen.findByText('Location:');
  expect(modalText).toBeInTheDocument();
});
