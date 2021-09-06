import React, { useState } from 'react';
import Magnifier from '../assets/magnifying-glass.svg';
import Cross from '../assets/cross.svg';


const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <form onSubmit={e => e.preventDefault()} className="search">
      <label htmlFor="header-search">
        <span className="visually_hidden">Search</span>
      </label>
      <input
        type="text"
        placeholder="Search"
        required
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        className='search_field'
      />
      { value ?
        <button
          onClick={() => setValue('')}
          className="clear_btn" >
          <img
            className="clear_icon"
            src={Cross}
            alt="Clear Icon"
            color="darkgrey"
          />
        </button>
        :
        null
      }
      <button
        type="submit"
        disabled={!value}
        onClick={() => setValue('')}
        className="search_btn"
        style={ value ? {backgroundColor: '#1f2dff'}
          : {backgroundColor: "white"}
        }>
        <img
          className="search_icon"
          src={Magnifier}
          alt="Search Icon"
          style={ value ? {color: "white"}
            : {color: "darkgrey"}
          }
        />
      </button>
    </form>
  )
}

export default SearchBar;
