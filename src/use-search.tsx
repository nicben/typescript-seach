import React, { useEffect, useState } from 'react';
import { IShip } from './IShip';
import { api } from './api';

const useSearch = () => {
  const [shipsFound, setShipsFound] = useState<IShip[]>([]);
  const [shipSearch, setShipSearch] = useState('');

  const SearchForShips = async (search: string): Promise<IShip[]> => {
    const result = await fetch(api + search);
      if(!result.ok){
        throw new Error('Request failed!');
      }
    return await result.json();
  }

  useEffect(() => {
    (async () => {
      if(shipSearch) {
        try{
          const response = await SearchForShips(shipSearch);
          setShipsFound(response);
        }
        catch (error){
          console.error(error.message || 'Something went wrong!');
        }
      }
    })();
  }, [shipSearch]);

  useEffect(() => {
    if (!shipSearch)
      return setShipsFound([]);
  }, [shipSearch]);

  return { shipsFound, shipSearch, setShipSearch}
}
export default useSearch;
