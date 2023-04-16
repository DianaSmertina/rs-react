import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { screen } from '@testing-library/react';
import { FormPage } from '../pages/formPage';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../utils/testUtils';

test('Form page renders', () => {
  renderWithProviders(
    <BrowserRouter>
      <FormPage />
    </BrowserRouter>
  );
  expect(screen.getByText('Do you want to find a dog walker for your pet?')).toBeInTheDocument();
});
