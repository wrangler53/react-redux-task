import React from 'react';

const BoardColumn = ({ name, index }) => (
  <div className="board-column">
    <div className="board-column__header">{name}</div>
    <div className="board-column__items"></div>
  </div>
);

export default BoardColumn;