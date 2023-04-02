import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../pages/formPage';
import { BrowserRouter } from 'react-router-dom';

test('Form page renders', () => {
  render(
    <BrowserRouter>
      <FormPage />
    </BrowserRouter>
  );
  expect(screen.getByText('Do you want to find a dog walker for your pet?')).toBeInTheDocument();
});
