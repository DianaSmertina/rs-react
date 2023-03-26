import { MyForm } from '../components/form/form';
import React from 'react';
import { Card } from '../components/mainCards/cardTemplate';

export interface FormDogCard {
  name?: string | undefined;
  startDate?: string | undefined;
  walkType?: string | undefined;
  isTrainedYes?: boolean | undefined;
  isTrainedNo?: boolean | undefined;
  equipment?: boolean | undefined;
  image_url?: string;
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
