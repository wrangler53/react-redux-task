import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import CandidateCard from '../CandidateCard';

const BoardColumn = ({ columnName, columnIndex, candidates }) => (
  <div className="board-column">
    <div className="board-column__header">{columnName} ({candidates.length})</div>
    <div className="board-column__items">
      {
        candidates.map(({ id }) =>
          <CandidateCard
            key={id.value}
            candidateId={id.value}
            columnIndex={columnIndex}
          />
        )
      }
    </div>
  </div>
);

const mapStateToProps = ({ candidatesReducer }, { columnIndex }) => ({
  candidates:
    Object.values(candidatesReducer)
      .filter(({ status }) => status === columnIndex)
      .filter(({ location }) => {
        return (!(candidatesReducer.filters && candidatesReducer.filters.city)) ? true : candidatesReducer.filters.city === location.city;
      })
      .filter(({ name }) => {
        return (!(candidatesReducer.filters && candidatesReducer.filters.name)) ?
          true :
          candidatesReducer.filters.name === name.first || candidatesReducer.filters.name === name.last;
      })
});

BoardColumn.propTypes = {
  columnName: PropTypes.string,
  columnIndex: PropTypes.number.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(BoardColumn);