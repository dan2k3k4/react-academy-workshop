import {handleActions} from 'redux-actions';
import {setStatus} from 'state/actions/online-status-actions';

const initialState = "SHOW_ALL";

const onlineStatusReducer = handleActions({
  [setStatus]: (state, action) => action.payload
}, initialState);

export default onlineStatusReducer;
