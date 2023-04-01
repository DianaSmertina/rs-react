import React from 'react';
import { FormDogCard } from '../../pages/formPage';
import { Dog } from './cards';

export function Card(props: { card: Dog & FormDogCard }) {
  const dogBlocks = [
    { title: 'Average Height: ', value: props.card.average_height_cm + 'sm' },
    { title: 'Average Weight: ', value: props.card.weight_kg + 'kg' },
    { title: '', value: props.card.description },
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
        {typeof props.card.image_url === 'string' && (
          <img className="card__dog-img" src={props.card.image_url}></img>
        )}
      </div>
      {props.card.average_height_cm && createBlocks(dogBlocks)}
      {props.card.walkType && createBlocks(formBlocks)}
    </div>
  );
}
