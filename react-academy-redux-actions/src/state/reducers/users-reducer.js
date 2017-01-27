import {handleActions, createAction} from 'redux-actions';

//actions
export const addUser = createAction('ADD_USER');
export const removeUser = createAction('REMOVE_USER');
export const receiveUsers = createAction('RECEIVE_USERS');
export const setLoading = createAction('SET_LOADING');

//thunks
export const loadUsers = () => dispatch => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(receiveUsers([{name: 'john', id: 7}, {name: 'monica', id: 5}]));
  }, 3000);
}

//reducer
export default handleActions({
  [addUser]: (state, {payload:user}) => ({
    ...state,
    list: [...state.list, user]
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
    list: [...state.list, ...newUsers]
  })
}, {list: [], loading: false});