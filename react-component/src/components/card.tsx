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
        <img className="card__dog-img" src={this.props.dog.image_url}></img>
        <p className="card__dog-info">
          {'Average Height: ' + this.props.dog.average_height_cm + 'sm'}
        </p>
        <p className="card__dog-info">{'Average Weight: ' + this.props.dog.weight_kg + 'kg'}</p>
        <p className="card__dog-info">{this.props.dog.description}</p>
      </div>
    );
  }
}
