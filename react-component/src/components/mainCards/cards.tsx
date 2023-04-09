import React, { useEffect, useState } from 'react';
import { Card } from './cardTemplate';
import { Character, CharacterResponseResult } from '../../types/types';
import { Loading } from './loading';

export function CardList(props: { search: string; onClick: (cardId: number) => void }) {
  const [cards, setCards] = useState<{
    isLoaded: boolean;
    result: CharacterResponseResult | null | number;
  }>({ isLoaded: false, result: null });

  useEffect(() => {
    setCards((prevState) => {
      return { isLoaded: false, result: prevState.result };
    });
    const savedText = localStorage.getItem('search') || '';
    fetch('https://rickandmortyapi.com/api/character/?name=' + savedText.toLowerCase())
      .then((response) => {
        if (!response.ok) {
          throw new Error('Characters not found');
        }
        return response.json();
      })
      .then((data) => {
        setCards({ isLoaded: true, result: data });
      })
      .catch(() => {
        setCards({ isLoaded: false, result: 0 });
      });
  }, [props.search]);

  const getCardsElem = (cardsArr: Array<Character> | undefined) => {
    if (cardsArr) {
      return cardsArr.map((el, i) => {
        return <Card card={el} key={i} onClick={(cardId: number) => props.onClick(cardId)} />;
      });
    }
  };

  return (
    <div className="cards">
      {!cards.isLoaded && cards.result === 0 && 'Characters not found'}
      {!cards.isLoaded && cards.result !== 0 && <Loading />}
      {cards.isLoaded && typeof cards?.result !== 'number' && getCardsElem(cards?.result?.results)}
    </div>
  );
}
