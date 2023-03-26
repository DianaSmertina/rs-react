import { FormDogCard } from 'pages/formPage';
import React from 'react';

export class FormCard extends React.Component<{ card: FormDogCard }, object> {
  render() {
    return (
      <div className="card">
        <h2 className="card__dog-name">{this.props.card.dogName}</h2>
        <div className="card__img-wrap">
          <img className="card__dog-img" src={this.props.card.photoURL}></img>
        </div>
        <p className="card__dog-info">
          <b>Type of walk: </b>
          {this.props.card.walkType}
        </p>
        <p className="card__dog-info">
          <b>Start date: </b>
          {this.props.card.startDate};
        </p>
        <p className="card__dog-info">
          <b>Dog is trained: </b>
          {this.props.card.isTrainedYes ? 'Yes' : 'No'};
        </p>
        <p className="card__dog-info">
          <b>Do equipment need? </b>
          {this.props.card.equipment ? 'No' : 'Yes'};
        </p>
      </div>
    );
  }
}
