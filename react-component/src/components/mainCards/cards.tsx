import React, { useEffect, useState } from 'react';
import { Card } from './cardTemplate';
import { Character, CharacterResponseResult } from '../../types/types';

export function CardList() {
  const [cards, setCards] = useState<CharacterResponseResult | null>(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const getCardsElem = (cardsArr: Array<Character> | undefined) => {
    if (cardsArr) {
      return cardsArr.map((el, i) => {
        return <Card card={el} key={i} />;
      });
    }
  };

  return <div className="cards">{getCardsElem(cards?.results)}</div>;
}
