import {createAction} from 'redux-actions';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

//thunks
export const incrementIfOdd = () => (dispatch, getState) => {
  const {counter} = getState();
  if (counter % 2 !== 0) {
    dispatch(increment(1));
  }
}