import 'whatwg-fetch';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('App component', async () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(getByText('Main')).toBeInTheDocument();
});
