import { FormDogCard } from '../../pages/formPage';
import React from 'react';
import { validateFormFields } from '../../utilites/utilites';

export interface Fields {
  dogName: string;
  startDate: string;
  walkType: string;
  isTrained: string;
  equipment: string;
  photo: string;
}

export class MyForm extends React.Component<
  { onSubmit: (card: FormDogCard) => void },
  { isFilledRight: Fields }
> {
  dogName: React.RefObject<HTMLInputElement>;
  startDate: React.RefObject<HTMLInputElement>;
  walkType: React.RefObject<HTMLSelectElement>;
  isTrainedYes: React.RefObject<HTMLInputElement>;
  isTrainedNo: React.RefObject<HTMLInputElement>;
  equipment: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
  constructor(props: { onSubmit: (card: FormDogCard) => void }) {
    super(props);
    this.dogName = React.createRef();
    this.startDate = React.createRef();
    this.walkType = React.createRef();
    this.isTrainedYes = React.createRef();
    this.isTrainedNo = React.createRef();
    this.equipment = React.createRef();
    this.photo = React.createRef();
    this.state = {
      isFilledRight: {
        dogName: 'form__no-errors',
        startDate: 'form__no-errors',
        walkType: 'form__no-errors',
        isTrained: 'form__no-errors',
        equipment: 'form__no-errors',
        photo: 'form__no-errors',
      },
    };
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const photo = this.photo.current ? this.photo.current.files : [];
    const photoURL = photo?.length ? window.URL.createObjectURL(photo[0]) : '';
    const card: FormDogCard = {
      dogName: this.dogName.current?.value,
      startDate: this.startDate.current?.value,
      walkType: this.walkType.current?.value,
      isTrainedYes: this.isTrainedYes.current?.checked,
      isTrainedNo: this.isTrainedNo.current?.checked,
      equipment: this.equipment.current?.checked,
      photoURL: photoURL,
    };
    this.setState((prevState) => {
      return { isFilledRight: validateFormFields(card, prevState.isFilledRight) };
    });
    this.props.onSubmit(card);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Do you want to find a dog walker for your pet?</h2>
        <label>
          Dog name:
          <input type="text" name="dogName" ref={this.dogName}></input>
          <div className={this.state.isFilledRight.dogName}>
            Please enter a capitalized name of 2 characters or more
          </div>
        </label>
        <label>
          Select a date when the dog walker can start
          <input type="date" name="startDate" ref={this.startDate}></input>
          <div className={this.state.isFilledRight.startDate}>
            Please enter a date tomorrow or later
          </div>
        </label>
        <label>
          Choose walk type:
          <select name="walkType" ref={this.walkType}>
            <option value="short">Short walk on 15 minuetes</option>
            <option value="averege">Average half hour walk</option>
            <option value="long">Long walk for a couple of hours with a lot of games</option>
            <option value="collective">Walk with other dogs for a couple of hours</option>
          </select>
          <div className={this.state.isFilledRight.walkType}>Please select one option</div>
        </label>
        <div className="form__switch">
          <p className="switch-question">Is dog trained?:</p>
          <label>
            Yes
            <input type="radio" name="switch" value="yes" ref={this.isTrainedYes} defaultChecked />
          </label>
          <label>
            No
            <input type="radio" name="switch" value="no" ref={this.isTrainedNo} />
          </label>
          <div className={this.state.isFilledRight.isTrained}>Please select one option</div>
        </div>
        <label>
          I will provide my equipment for a walk (leash, muzzle, toys, treats)
          <input type="checkbox" name="equipment" ref={this.equipment}></input>
        </label>
        <label>
          Download dog photo
          <input type="file" name="photo" ref={this.photo} accept="image/*"></input>
          <div className={this.state.isFilledRight.photo}>Please download image</div>
        </label>
        <input type="submit" value="Submit" className="form__submit" />
      </form>
    );
  }
}
