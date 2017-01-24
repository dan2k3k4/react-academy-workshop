import React from 'react';

const Favourite = ({isFavourite, toggleFavourite}) => {
  return (
    <span>
      <button onClick={toggleFavourite}>
      {isFavourite === true ? 'Remove 🌟' : 'Add 🌟'}
      </button>
    </span>
  )
}

export default Favourite;
