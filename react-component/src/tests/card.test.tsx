import { render, screen } from '@testing-library/react';
import React from 'react';
import { Dog } from '../components/mainCards/cards';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components/mainCards/cardTemplate';

const cardObj: Dog = {
  name: 'Labrador Retriever',
  image_url: 'https://www.akc.org/wp-content/uploads/2017/11/Labrador-Retriever-On-White-01.jpg',
  average_height_cm: 56,
  description:
    'The Labrador Retriever is a friendly and active breed that loves to play and is great with kids. They are known for their intelligence and trainability and are often used as service and therapy dogs. They originated in Newfoundland, Canada.',
  weight_kg: 30,
};

test('Card have all fields', () => {
  render(<Card card={cardObj} />);
  expect(screen.getByText('Labrador Retriever')).toBeInTheDocument();
  expect(screen.getByText('56sm')).toBeInTheDocument();
  expect(screen.getByText('30kg')).toBeInTheDocument();
  expect(screen.getByText(/The Labrador Retriever is/i)).toBeInTheDocument();
});
