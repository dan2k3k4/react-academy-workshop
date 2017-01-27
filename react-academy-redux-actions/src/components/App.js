import React from 'react';
import Counter from 'components/Counter';
import OnlineStatusSwitcher from 'components/OnlineStatusSwitcher';

const App = ({counter, inc, dec, setStatus}) => <div>
  <Counter
    counter={counter}
    increment={inc}
    decrement={dec}
  />
  <OnlineStatusSwitcher setStatus={setStatus} />
</div>

export default App;
