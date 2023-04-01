import React from 'react';
import { Card } from '../components/mainCards/cardTemplate';
import { MyForm } from '../components/form/form';

export interface FormDogCard {
  name?: string;
  startDate?: string;
  walkType?: string;
  isTrained?: string;
  equipment?: boolean;
  image_url?: FileList | string;
}

export class FormPage extends React.Component<object, { cards: Array<FormDogCard> | [] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addNewCard(card: FormDogCard) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));
  }

  render() {
    const cardsArr = this.state.cards.slice(0).map((el, i) => <Card card={el} key={i} />);
    return (
      <main>
        <MyForm onSubmit={(card: FormDogCard) => this.addNewCard(card)} />
        <div className="cards">{cardsArr}</div>
      </main>
    );
  }
}
