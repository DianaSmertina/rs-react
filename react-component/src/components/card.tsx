import React from 'react';
import { Dog } from './cards';

export class Card extends React.Component<{ dog: Dog }, object> {
  constructor(props: { dog: Dog }) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h2 className="card__dog-name">{this.props.dog.name}</h2>
        <div className="card__img-wrap">
          <img className="card__dog-img" src={this.props.dog.image_url}></img>
        </div>
        <p className="card__dog-info">
          <b>Average Height: </b>
          {this.props.dog.average_height_cm + 'sm'}
        </p>
        <p className="card__dog-info">
          <b>Average Weight: </b>
          {this.props.dog.weight_kg + 'kg'}
        </p>
        <p className="card__dog-info dog-description">{this.props.dog.description}</p>
      </div>
    );
  }
}
