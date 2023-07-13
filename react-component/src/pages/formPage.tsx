import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { Card } from '../components/mainCards/cardTemplate';
import { MyForm } from '../components/form/form';

export function FormPage() {
  const cards = useSelector((state: RootState) => state.formCard.formCards);

  return (
    <main>
      <MyForm />
      <div className="cards">
        {cards.map((el, i) => (
          <Card card={el} key={i} />
        ))}
      </div>
    </main>
  );
}
