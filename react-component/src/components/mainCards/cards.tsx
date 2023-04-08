import React, { useEffect, useState } from 'react';
import { Card } from './cardTemplate';
import { Character, CharacterResponseResult } from '../../types/types';
import { Loading } from './loading';

export function CardList(props: { search: string; onClick: (cardId: number) => void }) {
  const [cards, setCards] = useState<{ isLoaded: boolean; result: CharacterResponseResult | null }>(
    { isLoaded: false, result: null }
  );

  useEffect(() => {
    setCards((prevState) => {
      return { isLoaded: false, result: prevState.result };
    });
    const savedText = localStorage.getItem('search') || '';
    fetch('https://rickandmortyapi.com/api/character/?name=' + savedText.toLowerCase())
      .then((response) => response.json())
      .then((data) => {
        setCards({ isLoaded: true, result: data });
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
      {!cards.isLoaded && <Loading />}
      {cards.isLoaded && getCardsElem(cards?.result?.results)}
    </div>
  );
}
