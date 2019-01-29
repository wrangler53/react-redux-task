import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import BoardColumn from '../BoardColumn';

const Board = ({ columns }) => (
  <div className="board">
    {
      columns && columns.map(({ name, index }) =>
        <BoardColumn
          key={index}
          columnIndex={index}
          columnName={name}
        />
      )
    }
  </div>
);

const mapStateToProps = ({ boardColumnsReducer }) => ({
  columns: boardColumnsReducer
});

Board.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      index: PropTypes.number.isRequired
    })
  )
};

export default connect(mapStateToProps)(Board);