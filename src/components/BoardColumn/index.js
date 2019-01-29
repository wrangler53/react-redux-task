import React from 'react';
import { connect } from 'react-redux';

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
});

export default connect(mapStateToProps)(BoardColumn);