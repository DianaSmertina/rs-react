import React, { useState } from 'react';
import { Card } from '../components/mainCards/cardTemplate';
import { MyForm } from '../components/form/form';
import { FormDogCard } from '../types/types';

export function FormPage() {
  const [cards, setCards] = useState<Array<FormDogCard | never>>([]);

  const addNewCard = (card: FormDogCard) => {
    setCards([...cards, card]);
  };

  const cardsArr = cards.slice(0).map((el, i) => <Card card={el} key={i} />);
  return (
    <main>
      <MyForm onSubmit={(card: FormDogCard) => addNewCard(card)} />
      <div className="cards">{cardsArr}</div>
    </main>
  );
}
