import { FormDogCard } from '../../pages/formPage';
import React from 'react';

export class MyForm extends React.Component<{ onSubmit: (card: FormDogCard) => void }, object> {
  dogName: React.RefObject<HTMLInputElement>;
  dogBithday: React.RefObject<HTMLInputElement>;
  dogBreeds: React.RefObject<HTMLSelectElement>;
  isTrainedYes: React.RefObject<HTMLInputElement>;
  isTrainedNo: React.RefObject<HTMLInputElement>;
  acception: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
  constructor(props: { onSubmit: (card: FormDogCard) => void }) {
    super(props);
    this.dogName = React.createRef();
    this.dogBithday = React.createRef();
    this.dogBreeds = React.createRef();
    this.isTrainedYes = React.createRef();
    this.isTrainedNo = React.createRef();
    this.acception = React.createRef();
    this.photo = React.createRef();
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const photo = this.photo.current ? this.photo.current.files : '';
    const photoURL = photo ? window.URL.createObjectURL(photo[0]) : '';
    console.log(photoURL);
    const card = {
      dogName: this.dogName.current?.value,
      dogBithday: this.dogBithday.current?.value,
      dogBreeds: this.dogBreeds.current?.value,
      isTrained: this.isTrainedYes.current?.checked,
      acception: this.acception.current?.checked,
      photo: photoURL,
    };
    this.props.onSubmit(card);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Dog name:
          <input type="text" name="dogName" ref={this.dogName}></input>
        </label>
        <label>
          Dog birthday:
          <input type="date" name="birthday" ref={this.dogBithday}></input>
        </label>
        <label>
          Choose breed:
          <select name="breeds" ref={this.dogBreeds}>
            <option value="bulldog">Bulldog</option>
            <option value="poodle">Poodle</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="corgi">Corgi</option>
          </select>
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
        </div>
        <label>
          Do yo accept rules of our service?
          <input type="checkbox" name="accept" ref={this.acception}></input>
        </label>
        <label>
          Download dog photo
          <input type="file" name="photo" ref={this.photo}></input>
        </label>
        <input type="submit" value="Submit" className="form__submit" />
      </form>
    );
  }
}
