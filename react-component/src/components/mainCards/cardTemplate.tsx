import { FormDogCard } from 'pages/formPage';
import React from 'react';
import { Dog } from './cards';

export class Card extends React.Component<{ card: Dog & FormDogCard }, object> {
  createBlocks(arr: Array<{ title: string; value: string | undefined }>) {
    return arr.map((el, i) => {
      return (
        <p className="card__dog-info" key={i}>
          <b>{el.title}</b>
          {el.value}
        </p>
      );
    });
  }

  render() {
    const dogBlocks = [
      { title: 'Average Height: ', value: this.props.card.average_height_cm + 'sm' },
      { title: 'Average Weight: ', value: this.props.card.weight_kg + 'sm' },
      { title: '', value: this.props.card.description },
    ];

    const formBlocks = [
      { title: 'Type of walk: ', value: this.props.card.walkType },
      { title: 'Start date: ', value: this.props.card.startDate },
      { title: 'Dog is trained: ', value: this.props.card.isTrainedYes ? 'Yes' : 'No' },
      { title: 'Do equipment need? ', value: this.props.card.equipment ? 'No' : 'Yes' },
    ];

    return (
      <div className="card">
        <h2 className="card__dog-name">{this.props.card.name}</h2>
        <div className="card__img-wrap">
          <img className="card__dog-img" src={this.props.card.image_url}></img>
        </div>
        {this.props.card.average_height_cm && this.createBlocks(dogBlocks)}
        {this.props.card.walkType && this.createBlocks(formBlocks)}
      </div>
    );
  }
}
