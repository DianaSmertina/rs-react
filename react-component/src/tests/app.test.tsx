import 'whatwg-fetch';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../utils/testUtils';

test('App component', async () => {
  const { getByText } = renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(getByText('Main')).toBeInTheDocument();
});
