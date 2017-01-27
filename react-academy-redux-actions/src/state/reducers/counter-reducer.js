import {handleActions} from 'redux-actions';
import {increment, decrement} from 'state/actions/counter-actions';

const initialState = 0;

const counterReducer = handleActions({
  [increment]: (state, {payload:amount}) => state + amount,
  [decrement]: (state, {payload:amount}) => state - amount
}, initialState);

export default counterReducer;