import {createAction} from 'redux-actions';

export const addUser = createAction('ADD_USER');
export const removeUser = createAction('REMOVE_USER');
export const receiveUsers = createAction('RECEIVE_USERS');
export const setLoading = createAction('SET_LOADING');

//thunks
export const loadUsers = () => dispatch => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(receiveUsers([
      {name: 'john', id: 7, isOnline: false},
      {name: 'monica', id: 5, isOnline: true}
    ]))
  }, 1000);
}
