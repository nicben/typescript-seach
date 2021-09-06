import React, { useEffect, useState } from 'react';
import { IShip } from './IShip';
import { api } from './api';

const SearchForShips = async (query: string): Promise<IShip[]> => {
  const result = await fetch(api + query);
  return (await result.json());
}

const useSearch = () => {
  const [shipsFound, setShipsFound] = useState<IShip[]>([]);
  const [shipSearch, setShipSearch] = useState('');

  useEffect(() => {
    (async () => {
      if(shipSearch) {
        const response = await SearchForShips(shipSearch);
        setShipsFound(response);
      }
    })();
  }, [shipSearch]);

  useEffect(() => {
    if (!shipSearch) return setShipsFound([]);
  }, [shipSearch]);

  return { shipsFound, shipSearch,  setShipSearch}
}
export default useSearch;
