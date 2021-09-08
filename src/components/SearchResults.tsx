import React, { useState } from 'react';
import { IShip } from '../IShip';
import DownArrow from '../assets/down-arrow.svg';

interface props {
  ships: [] | IShip[];
}

const SearchResults: React.FC<props> = ({ships }) => {
  const [expandedRows, setExpandedRows] = useState([""])

  const handleExpand = (ship: IShip) =>{
    let newExpandedRows = [...expandedRows];
    let idxFound = newExpandedRows.findIndex((id)=>{
      return id === ship.shipId;
    });

    if(idxFound > -1){
      newExpandedRows.splice(idxFound, 1);
    }
    else{
      newExpandedRows.push(ship.shipId);
    }
    setExpandedRows([...newExpandedRows]);
  }

  const isExpanded = (ship: IShip)=>{
    const idx = expandedRows.findIndex(
      (id)=>{
        return id === ship.shipId;
      }
    );
    return idx > -1;
  }

  function getRows(ship: IShip) {
    let rows = [];

    const firstRow = (
      <tbody>
      <tr key={ship.shipId} onClick={()=>handleExpand(ship)}>
        <td>
          <button className="arrow_btn">
            <img className={isExpanded(ship)  ? "" : "isRotated"}
              src= {DownArrow}
              alt="Expand Icon"
            />
          </button>
        </td>
        <td>{ship.heading}</td>
        <td>{ship.speed}</td>
        <td>{ship.length}</td>
        <td>{ship.yearOfConstruction}</td>
      </tr>
      </tbody>
    )
    rows.push(firstRow);

    if(isExpanded(ship)){
      let paragraphs = ship.body.split("</p>");
      const firstParagraph = paragraphs[0]+'</p>';
      const bodyRow = (
        <tbody>
        <tr>
          <td colSpan={5}>
            <h3>Info</h3>
            <p dangerouslySetInnerHTML={ {__html: firstParagraph} } />
          </td>
        </tr>
        </tbody>
      );
      rows.push(bodyRow);
    }
    return rows;
  }

  function getTable(ships: IShip[]) {
    const playerRows = ships.map((ship: IShip ) => {
      return getRows(ship);
    });

    return (
      <table >
        <thead>
        <tr>
          <th className="icon-width"></th>
          <th className="name-width">Name</th>
          <th>Fart</th>
          <th>Lengde</th>
          <th>Byggeår</th>
        </tr>
        </thead>
        {playerRows}
      </table>
    );
  }

  return (
    <div>
      {getTable(ships)}
    </div>
  );
};

export default SearchResults;
