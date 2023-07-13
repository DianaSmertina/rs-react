import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PopUp } from './popUp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDogCard } from '../../types/types';
import { addFormCard } from '../../redux/formSlice';

export function MyForm() {
  const [showPopup, setShowPopup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDogCard>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const dispatch = useDispatch();

  const showMessage = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  const myHandleSubmit: SubmitHandler<FormDogCard> = (data) => {
    const cardData = Object.assign({}, data);
    const photoURL =
      cardData.image?.length && typeof cardData.image !== 'string'
        ? window.URL.createObjectURL(cardData.image[0])
        : '';
    cardData.image = photoURL;
    dispatch(addFormCard(cardData));
    showMessage();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(myHandleSubmit)} className="form" data-testid="form">
      {showPopup && <PopUp />}
      <h2 className="form__title">Do you want to find a dog walker for your pet?</h2>
      <label>
        Dog name:
        <input
          type="text"
          {...register('name', {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\u00C0-\u1FFF\u2800-\uFFFD]+$/,
            validate: (value) => {
              return value && value[0].toUpperCase() === value[0];
            },
          })}
          className="form__input"
          data-testid="dogName"
        ></input>
        {errors.name && (
          <div className="form__errors" data-testid="error-message">
            Please enter a capitalized name of 2 characters or more
          </div>
        )}
      </label>
      <label>
        Select a date when the dog walker can start:
        <input
          type="date"
          {...register('startDate', {
            required: true,
            validate: (value) => {
              return value && new Date(value) >= new Date();
            },
          })}
          className="form__input"
          data-testid="startDate"
        ></input>
        {errors.startDate && (
          <div className="form__errors" data-testid="error-message">
            Please enter a date tomorrow or later
          </div>
        )}
      </label>
      <label>
        Choose walk type:
        <select
          {...register('walkType', {
            required: true,
          })}
          className="form__input"
        >
          <option value="short">Short walk on 15 minuetes</option>
          <option value="averege">Average half hour walk</option>
          <option value="long">Long walk for a couple of hours with a lot of games</option>
          <option value="collective">Walk with other dogs for a couple of hours</option>
        </select>
      </label>
      <div className="form__switch">
        <p className="switch-question">Is dog trained?</p>
        <label className="switch-label">
          Yes
          <input
            type="radio"
            {...register('isTrained')}
            value="yes"
            className="switch-radio"
            defaultChecked
          />
        </label>
        <label className="switch-label">
          No
          <input type="radio" {...register('isTrained')} value="no" className="switch-radio" />
        </label>
      </div>
      <label className="form__checkbox-label">
        I will provide leash and muzzle for a walk
        <input type="checkbox" {...register('equipment')} className="form__checkbox"></input>
      </label>
      <label>
        Download dog photo
        <input
          type="file"
          accept="image/*"
          {...register('image', {
            required: true,
          })}
          className="form__input-file"
          data-testid="photo"
        ></input>
        <span className="form__input-file-span"></span>
        {errors.image && (
          <div className="form__errors" data-testid="error-message">
            Please download image
          </div>
        )}
      </label>
      <input type="submit" value="Submit" className="form__submit btn" data-testid="submit" />
    </form>
  );
}
