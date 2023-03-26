import { Fields } from '../components/form/form';
import { FormDogCard } from '../pages/formPage';

export function validateFormFields(card: FormDogCard, fields: Fields) {
  const newCard = Object.assign({}, card);
  const newFields = Object.assign({}, fields);
  let errorCount = 0;
  if (
    newCard.dogName !== undefined &&
    newCard.dogName.length > 1 &&
    newCard.dogName[0].toUpperCase() === newCard.dogName[0] &&
    /^[a-zA-Z\u00C0-\u1FFF\u2800-\uFFFD]+$/.test(newCard.dogName)
  ) {
    newFields.dogName = 'form__no-errors';
  } else {
    newFields.dogName = 'form__errors';
    errorCount++;
  }

  if (newCard.startDate !== undefined && new Date(newCard.startDate) >= new Date()) {
    newFields.startDate = 'form__no-errors';
  } else {
    newFields.startDate = 'form__errors';
    errorCount++;
  }

  if (newCard.walkType) {
    newFields.walkType = 'form__no-errors';
  } else {
    newFields.walkType = 'form__errors';
    errorCount++;
  }

  if (newCard.isTrainedNo || newCard.isTrainedYes) {
    newFields.isTrained = 'form__no-errors';
  } else {
    newFields.isTrained = 'form__errors';
    errorCount++;
  }

  if (newCard.photoURL) {
    newFields.photo = 'form__no-errors';
  } else {
    newFields.photo = 'form__errors';
    errorCount++;
  }

  return { newFields: newFields, errorCount: errorCount };
}
