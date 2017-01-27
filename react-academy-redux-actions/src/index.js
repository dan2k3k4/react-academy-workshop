import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import init from './init';

init();

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);