import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa2 mb2 ba b--green bg-lightest-blue br-pill shadow-5'
        type='search'
        placeholder=' Search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;