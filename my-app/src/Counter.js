import React, {Component} from 'react';

const Counter = ({count = 0, total = 100}) => {
  return (
    <div>
      {`${count} of ${total}`}
    </div>
  )
}

export default Counter;
