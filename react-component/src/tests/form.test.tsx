import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MyForm } from '../components/form/form';
import { FormDogCard } from '../types/types';

describe('form test', () => {
  const firstCard: FormDogCard = {
    name: 'Tom',
    startDate: '2024-03-30',
    walkType: 'long',
    isTrained: 'yes',
    equipment: true,
    image:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
  };
  let fakeState = [firstCard];
  const handler = (card: FormDogCard) => {
    fakeState = [...fakeState, card];
  };

  it('should render all fields', () => {
    render(<MyForm onSubmit={(card: FormDogCard) => handler(card)} />);
    expect(screen.getByText('Dog name:')).toBeInTheDocument();
    expect(screen.getByText(/Select a date/i)).toBeInTheDocument();
    expect(screen.getByText('Choose walk type:')).toBeInTheDocument();
    expect(screen.getByText(/Is dog trained/i)).toBeInTheDocument();
    expect(screen.getByText(/I will provide/i)).toBeInTheDocument();
    expect(screen.getByText('Download dog photo')).toBeInTheDocument();
  });

  it('should return error if name and date uncorrect and file does not downloaded', async () => {
    render(<MyForm onSubmit={(card: FormDogCard) => handler(card)} />);
    const dogName = screen.getByTestId<HTMLInputElement>('dogName');
    const date = screen.getByTestId<HTMLInputElement>('startDate');
    await act(async () => {
      fireEvent.change(dogName, { target: { value: 'abc' } });
      fireEvent.change(date, { target: { value: '2020-03-30' } });
    });
    const form = screen.getByTestId<HTMLFormElement>('form');
    await act(async () => {
      fireEvent.submit(form);
    });
    expect(screen.getByText(/Please enter a capitalized/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter a date tomorrow/i)).toBeInTheDocument();
    expect(screen.getByText(/Please download image/i)).toBeInTheDocument();
  });

  it('if there are no errors, form should resets and confirm message appears', async () => {
    render(<MyForm onSubmit={(card: FormDogCard) => handler(card)} />);

    const mockCreateObjectURL = jest.fn();
    window.URL.createObjectURL = mockCreateObjectURL;

    const dogName = screen.getByTestId<HTMLInputElement>('dogName');
    const date = screen.getByTestId<HTMLInputElement>('startDate');
    const fileInput = screen.getByTestId<HTMLInputElement>('photo');
    const fakeImg = new File(['img'], 'img.png', { type: 'image/png' });

    await act(async () => {
      fireEvent.change(dogName, { target: { value: 'Abc' } });
      fireEvent.change(date, { target: { value: '2026-03-30' } });
      await userEvent.upload(fileInput, fakeImg);
    });

    const form = screen.getByTestId<HTMLFormElement>('form');
    await act(async () => {
      fireEvent.submit(form);
    });

    const errors = screen.queryAllByTestId('error-message');
    expect(errors).toHaveLength(0);
    expect(dogName.value).toBe('');
    expect(screen.getByText('Data saved')).toBeInTheDocument();
  });
});
