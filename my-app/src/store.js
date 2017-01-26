import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

// Constants
const INCREMENT = 'INC';
const DECREMENT = 'DEC';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const RECEIVE_USERS = 'RECEIVE_USERS';
const SET_LOADING = 'SET_LOADING';

// Actions
const increment = amount => ({
  type: INCREMENT,
  amount
});

const decrement = amount => ({
  type: DECREMENT,
  amount
});

const addUser = user => ({
  type: ADD_USER,
  user
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const setLoading = loading => ({
  type: SET_LOADING,
  loading
});


// Helper
const user = (name, id) => {
  return {
    name: name,
    id: id
  };
};


// Thunks
const incrementIfOdd = () => (dispatch, getState) => {
  const {counter} = getState();

  if (counter % 2 === 0) {
    console.error('NOPE!');
    return;
  }

  console.log('its fine!');

  dispatch(increment(1));

  if (counter > 10) {
    dispatch(increment(500));
  }
};

const loadUsers = () => dispatch => {
  dispatch(setLoading(true));

  setTimeout(() => {
    dispatch(receiveUsers([
      user('John', 7),
      user('Monica', 5)
    ]));
  }, 3000);
};


// Reducers
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + action.amount;
    }
    case DECREMENT: {
      return state - action.amount;
    }
    default: {
      return state;
    }
  }
};

const usersReducer = (state = {users: [], loading: !!0}, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.user]
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.userId)
      }
    }
    case RECEIVE_USERS: {
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.users]
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer
});

// Logger
const logger = createLogger();

// Middleware
const middleware = applyMiddleware(
  logger,
  thunk
);

// Setup store
const store = createStore(reducers, middleware);


// Dispatching fun
store.dispatch(increment(Math.floor(Math.random(0, 1) * 10)));
store.dispatch(increment(10));

store.dispatch(decrement(4));

store.dispatch(addUser({
  id: 1,
  name: "Dan"
}));

store.dispatch(addUser({
  id: 2,
  name: "Test"
}));

store.dispatch(removeUser(1));

store.dispatch(incrementIfOdd());

store.dispatch(loadUsers());
