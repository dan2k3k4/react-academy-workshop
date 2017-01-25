import React from 'react';

const DialogButton = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default DialogButton;
