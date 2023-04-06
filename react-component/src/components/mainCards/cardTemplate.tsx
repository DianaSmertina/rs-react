import React from 'react';
import { Character, FormDogCard } from '../../types/types';

export function Card(props: { card: Character & FormDogCard }) {
  const dogBlocks = [
    { title: 'Status: ', value: props.card.status },
    { title: 'Gender: ', value: props.card.gender },
    { title: 'Species', value: props.card.species },
  ];

  const formBlocks = [
    { title: 'Type of walk: ', value: props.card.walkType },
    { title: 'Start date: ', value: props.card.startDate },
    { title: 'Dog is trained: ', value: props.card.isTrained ? 'Yes' : 'No' },
    { title: 'Do equipment need? ', value: props.card.equipment ? 'No' : 'Yes' },
  ];

  const createBlocks = (arr: Array<{ title: string; value: string | FileList | undefined }>) => {
    return arr.map((el, i) => {
      if (typeof el.value === 'string') {
        return (
          <p className="card__dog-info" key={i}>
            <b>{el.title}</b>
            {el.value}
          </p>
        );
      }
    });
  };

  return (
    <div className="card">
      <h2 className="card__dog-name">{props.card.name}</h2>
      <div className="card__img-wrap">
        {typeof props.card.image === 'string' && (
          <img className="card__dog-img" src={props.card.image}></img>
        )}
      </div>
      {props.card.id && createBlocks(dogBlocks)}
      {props.card.walkType && createBlocks(formBlocks)}
    </div>
  );
}
