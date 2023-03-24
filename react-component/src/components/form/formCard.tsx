import { FormDogCard } from 'pages/formPage';
import React from 'react';

export class FormCard extends React.Component<{ card: FormDogCard }, object> {
  render() {
    return (
      <div className="card">
        <h2 className="card__dog-name">{this.props.card.dogName}</h2>
        <div className="card__img-wrap">
          <img className="card__dog-img" src={this.props.card.photo}></img>
        </div>
        <p className="card__dog-info">
          <b>Breed: </b>
          {this.props.card.dogBreeds}
        </p>
        <p className="card__dog-info">
          <b>Birthday: </b>
          {this.props.card.dogBithday};
        </p>
        <p className="card__dog-info">
          <b>Dog is trained: </b>
          {this.props.card.isTrained ? 'Yes' : 'No'};
        </p>
        <p className="card__dog-info">
          <b>Is rules accepted: </b>
          {this.props.card.acception ? 'Yes' : 'No'};
        </p>
      </div>
    );
  }
}
