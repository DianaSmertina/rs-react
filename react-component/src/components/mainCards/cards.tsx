import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCharactersByNameQuery } from '../../redux/rickAndMortyApi';
import type { RootState } from '../../redux/store';
import { Card } from './cardTemplate';
import { Character } from '../../types/types';
import { Loading } from './loading';

export function CardList(props: { onClick: (cardId: number) => void }) {
  const searchText = useSelector((state: RootState) => state.search.searchText);
  const savedText = searchText || '';
  const { data, isLoading, isError } = useGetCharactersByNameQuery(savedText);

  const getCardsElem = (cardsArr: Array<Character> | undefined) => {
    if (cardsArr) {
      return cardsArr.map((el, i) => {
        return <Card card={el} key={i} onClick={(cardId: number) => props.onClick(cardId)} />;
      });
    }
  };

  return (
    <div className="cards">
      {isLoading && <Loading />}
      {isError && 'Characters not found'}
      {!isLoading && data && data.results.length > 0 && getCardsElem(data.results)}
    </div>
  );
}
