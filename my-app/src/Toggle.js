import React, {Component} from 'react';

const Toggle = ({isActive = false, toggleActive}) => {
  return (
    <div>
      <button onClick={toggleActive}>
        { !isActive ? 'Show' : 'Hide'} offline users
      </button>
    </div>
  )
}

export default Toggle;
