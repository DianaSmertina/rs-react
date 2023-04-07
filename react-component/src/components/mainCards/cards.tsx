import React, { useEffect, useState } from 'react';
import { Card } from './cardTemplate';
import { Character, CharacterResponseResult } from '../../types/types';
import { Loading } from './loading';

export function CardList() {
  const [cards, setCards] = useState<{ isLoaded: boolean; result: CharacterResponseResult | null }>(
    { isLoaded: false, result: null }
  );

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCards({ isLoaded: true, result: data });
      });
  }, []);

  const getCardsElem = (cardsArr: Array<Character> | undefined) => {
    if (cardsArr) {
      return cardsArr.map((el, i) => {
        return <Card card={el} key={i} />;
      });
    }
  };

  return (
    <div className="cards">
      {!cards.isLoaded && <Loading />}
      {cards.isLoaded && getCardsElem(cards?.result?.results)}
    </div>
  );
}
