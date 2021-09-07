import React from 'react';
import Magnifier from '../assets/magnifying-glass.svg';
import Cross from '../assets/cross.svg';

interface props {
  search: string;
  setSearch: (value: string | ((prevValue: string) => string)) => void;
}

const SearchBar: React.FC<props> = ({search, setSearch}) => {
  return (
    <form onSubmit={e => e.preventDefault()} className="search">
      <label htmlFor="header-search">
        <span className="visually_hidden">Search</span>
      </label>
      <input
        type="text"
        placeholder="Search"
        required
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        className='search_field'
      />
      { search ?
        <button
          onClick={() => setSearch('')}
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
        disabled={!search}
        onClick={() => setSearch('')}
        className="search_btn"
        style={ search ? {backgroundColor: '#1f2dff'}
          : {backgroundColor: "white"}
        }>
        <img
          className="search_icon"
          src={Magnifier}
          alt="Search Icon"
          style={ search ? {color: "white"}
            : {color: "darkgrey"}
          }
        />
      </button>
    </form>
  )
}

export default SearchBar;
