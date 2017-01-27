import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from 'components/AppContainer';
import UsersListContainer from 'components/UsersListContainer';
import init from './init.js';
import store from 'state/store';
import {Provider} from 'react-redux';

init()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppContainer/>
      <UsersListContainer/>
    </div>
  </Provider>,
  document.getElementById('root')
);
