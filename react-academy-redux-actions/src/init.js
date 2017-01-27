import store from 'state/store';

//actions
import {increment, decrement, incrementIfOdd} from 'state/actions/counter-actions';
import {addUser, removeUser, loadUsers} from 'state/actions/users-actions';
import {setUser, logoutUser} from 'state/actions/auth-actions';

const init = () => {

  store.dispatch(increment(2));
  store.dispatch(increment(2));
  store.dispatch(increment(5));
  store.dispatch(decrement(1));
  store.dispatch(decrement(1));

  store.dispatch(addUser({name: 'kitze', id: 1}));
  store.dispatch(addUser({name: 'john', id: 2}));
  store.dispatch(addUser({name: 'ralf', id: 3}));
  store.dispatch(removeUser(2));

  store.dispatch(incrementIfOdd());
  store.dispatch(loadUsers());
  store.dispatch(setUser({name: 'kitze', token: 'adlgkaldgnadjga10384134311'}));
  setTimeout(() => {
    store.dispatch(logoutUser());
  }, 3000);

}

export default init;

