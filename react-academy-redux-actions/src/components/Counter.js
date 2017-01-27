import React from 'react';
import Button from 'components/Button';

const Counter = ({counter, inc, dec}) => <div>
  <h1>Counter logic</h1>
  Counter value is: {counter}
  <Button onClick={() => inc(1)} text="+" />
  <Button onClick={() => dec(1)} text="-" />
</div>

export default Counter;
