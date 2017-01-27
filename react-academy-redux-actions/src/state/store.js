import {createStore, combineReducers, applyMiddleware} from 'redux';

//middleware
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);

//reducers
import counterReducer from './reducers/counter-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import onlineStatusReducer from './reducers/online-status-reducer';

const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  auth: authReducer,
  onlineStatus: onlineStatusReducer
});

const store = createStore(reducers, middleware);

export default store;
