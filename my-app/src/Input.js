import React from 'react';

const Input = ({searchText = '', onSearchChange}) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        value={searchText}
        onChange={onSearchChange}
        />
    </div>
  )
}

export default Input;
