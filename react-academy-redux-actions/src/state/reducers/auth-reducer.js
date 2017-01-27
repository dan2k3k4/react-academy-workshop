import {handleActions} from 'redux-actions';
import {setUser, logoutUser} from 'state/actions/auth-actions';

const authReducer = handleActions({
  [setUser]: (state, action) => action.payload,
  [logoutUser]: (state, action) => null
}, null);

export default authReducer;