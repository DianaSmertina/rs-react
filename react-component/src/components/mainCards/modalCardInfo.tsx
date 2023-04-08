import React, { useEffect, useState } from 'react';
import { Character } from '../../types/types';
import { Loading } from './loading';

export function ModalCardInfo(props: { id: number; onClick: () => void }) {
  const [data, setData] = useState<{ isLoaded: boolean; result: null | Character }>({
    isLoaded: false,
    result: null,
  });

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/' + props.id)
      .then((response) => response.json())
      .then((data) => {
        setData({ isLoaded: true, result: data });
      });
  }, [props.id]);

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

  const makeCard = (cardData: Character | null) => {
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

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLDivElement).classList.contains('card__pop-up')) {
      props.onClick();
    }
  };

  return (
    <div
      className="card__pop-up pop-up"
      onClick={(e) => {
        handleBackgroundClick(e);
      }}
    >
      <div className="pop-up__background card-modal">
        <div className="btn card-modal__close" onClick={() => props.onClick()}></div>
        {!data.isLoaded && <Loading />}
        {data.isLoaded && makeCard(data.result)}
      </div>
    </div>
  );
}
