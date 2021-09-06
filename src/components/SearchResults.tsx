import React from 'react';
import { IShip } from '../IShip';

interface props {
  ships: [] | IShip[];
}

const SearchResults: React.FC<props> = ({ships }) => {

  return (
    <ul className='results'>
      {ships &&
      ships.map((ship: IShip ) => (
        <li className='results__item' key={ship.shipId}>
          {ship.heading}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
