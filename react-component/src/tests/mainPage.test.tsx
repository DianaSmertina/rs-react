import { render, screen } from '@testing-library/react';
import React from 'react';
import { MainPage } from '../pages/mainPage';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

test('Renders about page correctly', () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  expect(screen.getByText('Main page')).toBeInTheDocument();
});
