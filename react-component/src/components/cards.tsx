import React from 'react';
import { Card } from './card';

interface Breads {
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
    fetch('./src/assets/data/data.json')
      .then((responce) => responce.json())
      .then((data: Breads) => {
        this.setState({
          dogs: data.breeds,
        });
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.dogs?.length > 0 ? <Card dog={this.state.dogs[0]} /> : ''}
      </div>
    );
  }
}
