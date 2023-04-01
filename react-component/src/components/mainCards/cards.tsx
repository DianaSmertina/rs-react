import React from 'react';
import data from '../../assets/data/data.json';
import { Card } from './cardTemplate';

export interface Breads {
  breeds: Array<Dog>;
}

export interface Dog {
  name?: string;
  image_url?: string | FileList;
  average_height_cm?: number;
  description?: string;
  weight_kg?: number;
}

export function CardList() {
  const dogsElemArr = data.breeds.map((el, i) => {
    return <Card card={el} key={i} />;
  });

  return <div className="cards">{dogsElemArr}</div>;
}
