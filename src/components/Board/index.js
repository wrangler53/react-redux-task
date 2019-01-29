import React from 'react';
import { connect } from 'react-redux';

import BoardColumn from '../BoardColumn';

const Board = ({ columns }) => (
  <div className="board">
    {
      columns && columns.map(({ name, index }) =>
        <BoardColumn
          key={index}
          index={index}
          name={name}
        />
      )
    }
  </div>
);

const mapStateToProps = ({ boardColumnsReducer }) => ({
  columns: boardColumnsReducer
});

export default connect(mapStateToProps)(Board);