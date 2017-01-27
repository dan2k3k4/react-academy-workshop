import {handleActions} from 'redux-actions';
import {
  addUser,
  removeUser,
  receiveUsers,
  setLoading} from 'state/actions/users-actions';

//reducer
export default handleActions({
  [addUser]: (state, {payload:user}) => ({
    ...state,
    list: [...state.list, {...user, isOnline: true}]
  }),
  [removeUser]: (state, {payload: userId}) => ({
    ...state,
    list: state.list.filter(user => user.id !== userId)
  }),
  [setLoading]: (state, {payload:loading}) => ({
    ...state,
    loading
  }),
  [receiveUsers]: (state, {payload:newUsers}) => ({
    ...state,
    loading: false,
    list: [...state.list, ...newUsers.map(user => {
      user.isOnline = true;
      return user;
    })]
  })
}, {list: [], loading: false});
