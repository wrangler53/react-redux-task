import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import BoardColumn from '../BoardColumn';
import ErrorBoundary from '../ErrorBoundary';

const Board = ({ columns }) => (
  <div className="board">
    {
      columns && columns.map(({ name, index }) =>
        <ErrorBoundary key={index}>
          <BoardColumn
            columnIndex={index}
            columnName={name}
          />
        </ErrorBoundary>
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