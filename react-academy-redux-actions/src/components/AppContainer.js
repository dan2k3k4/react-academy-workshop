import {connect} from 'react-redux';
import {increment, decrement} from 'state/actions/counter-actions';
import {setStatus} from 'state/actions/users-actions';
import App from 'components/App';

const AppContainer = connect(
  state => ({
    counter: state.counter
  }),
  {
    inc: increment,
    dec: decrement,
    setStatus: setStatus
  }
)(App);

export default AppContainer;
