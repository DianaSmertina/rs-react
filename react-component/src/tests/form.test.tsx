import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MyForm } from '../components/form/form';
import { FormDogCard } from '../pages/formPage';

describe('form test', () => {
  const firstCard: FormDogCard | [] = {
    name: 'Tom',
    startDate: '2024-03-30',
    walkType: 'long',
    isTrainedYes: true,
    isTrainedNo: true,
    equipment: true,
    image_url:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
  };
  let fakeState = { cards: [firstCard] };
  const handler = (card: FormDogCard) => {
    fakeState = { cards: [...fakeState.cards, card] };
  };
  render(<MyForm onSubmit={(card: FormDogCard) => handler(card)} />);

  test('there are all fields', () => {
    expect(screen.getByText('Dog name:')).toBeInTheDocument();
    expect(screen.getByText(/Select a date/i)).toBeInTheDocument();
    expect(screen.getByText('Choose walk type:')).toBeInTheDocument();
    expect(screen.getByText(/Is dog trained/i)).toBeInTheDocument();
    expect(screen.getByText(/I will provide/i)).toBeInTheDocument();
    expect(screen.getByText('Download dog photo')).toBeInTheDocument();
  });

  test('fill fields uncorrect', () => {
    render(<MyForm onSubmit={(card: FormDogCard) => handler(card)} />);
    const dogName = screen.getByTestId<HTMLInputElement>('dogName');
    fireEvent.change(dogName, { target: { value: 'abc' } });
    const form = screen.getByTestId<HTMLFormElement>('form');
    fireEvent.submit(form);
    expect(screen.getByText(/Please enter a capitalized name/i)).toBeInTheDocument();
  });
});
