import React from 'react';
import { Card } from './card';
import data from '../assets/data/data.json';

export interface Breads {
  breeds: Array<Dog>;
}

export interface Dog {
  name: string;
  image_url: string;
  average_height_cm: number;
  description: string;
  weight_kg: number;
}

export class Cards extends React.Component<object, { dogs: Array<Dog> }> {
  constructor(props: object) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    // fetch('./src/assets/data/data.json')
    //   .then((responce) => responce.json())
    //   .then((data: Breads) => {
    //     this.setState({
    //       dogs: data.breeds,
    //     });
    //   });
    this.setState({
      dogs: data.breeds,
    });
  }

  render() {
    const elemArr = this.state.dogs.slice(0).map((el, i) => {
      return <Card dog={el} key={i} />;
    });
    return <div className="cards">{...elemArr}</div>;
  }
}
