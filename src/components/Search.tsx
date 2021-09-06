import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import useSearch from '../use-search';

const Search = () => {
  const search = useSearch();

  return (
    <div className='container'>
      <SearchBar search={search.shipSearch}  setSearch={search.setShipSearch}/>
      <SearchResults  ships={search.shipsFound}/>
    </div>
  );
};

export default Search;
