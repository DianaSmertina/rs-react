import React from 'react';
import { Character } from '../../types/types';
import { Loading } from './loading';
import { useGetCharactersByIdQuery } from '../../redux/rickAndMortyApi';

export function ModalCardInfo(props: { id: number; onClick: () => void }) {
  const { data, isLoading } = useGetCharactersByIdQuery(props.id);

  const makeListEpisodeInText = (episodeArr: Array<string> | undefined) => {
    if (episodeArr) {
      const resString = episodeArr
        .map((el) => {
          return el.replace('https://rickandmortyapi.com/api/episode/', '');
        })
        .join(', ');
      return resString;
    }
  };

  const makeDay = (strinDate: string | undefined) => {
    if (strinDate) {
      const date = new Date(Date.parse(strinDate));
      return date.toLocaleDateString('en-US');
    }
  };

  const makeCard = (cardData: Character | undefined) => {
    if (cardData) {
      return (
        <div className="modal-info">
          <h2 className="modal-info__header">{cardData.name}</h2>
          <div className="card__img-wrap">
            {typeof cardData.image === 'string' && (
              <img className="card__dog-img" src={cardData.image}></img>
            )}
          </div>
          <p>
            <b>Species: </b>
            {cardData.species}
          </p>
          <p>
            <b>Gender: </b>
            {cardData.gender}
          </p>
          <p>
            <b>Status: </b>
            {cardData.status}
          </p>
          <p>
            <b>Origin: </b>
            {cardData.origin?.name}
          </p>
          <p>
            <b>Location: </b>
            {cardData.location?.name}
          </p>
          <p>
            <b>Created: </b>
            {makeDay(cardData.created)}
          </p>
          <p>
            <b>Episodes: </b>
            {makeListEpisodeInText(cardData.episode)}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="card__pop-up pop-up" onClick={() => props.onClick()}>
      <div className="pop-up__background card-modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="btn card-modal__close"
          data-testid="close-card"
          onClick={() => props.onClick()}
        ></div>
        {isLoading && <Loading />}
        {!isLoading && makeCard(data)}
      </div>
    </div>
  );
}
