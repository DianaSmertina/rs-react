import { MyForm } from '../components/form/form';
import React from 'react';
import { FormCard } from '../components/form/formCard';

export interface FormDogCard {
  dogName: string | undefined;
  dogBithday: string | undefined;
  dogBreeds: string | undefined;
  isTrained: boolean | undefined;
  acception: boolean | undefined;
  photo: string;
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
    const cardsArr = this.state.cards.slice(0).map((el, i) => <FormCard card={el} key={i} />);
    return (
      <main>
        <MyForm onSubmit={(card: FormDogCard) => this.addNewCard(card)} />
        <div className="cards">{cardsArr}</div>
      </main>
    );
  }
}
