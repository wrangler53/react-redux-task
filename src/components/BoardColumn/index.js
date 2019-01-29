import React from 'react';
import { connect } from 'react-redux';

import CandidateCard from '../CandidateCard';

const BoardColumn = ({ name, candidates }) => (
  <div className="board-column">
    <div className="board-column__header">{name} ({candidates.length})</div>
    <div className="board-column__items">
      {
        candidates.map(({ id }) =>
          <CandidateCard
            key={id.value}
            candidateId={id.value}
          />
        )
      }
    </div>
  </div>
);

const mapStateToProps = ({ candidatesReducer }, ownProps) => ({
  candidates: candidatesReducer.filter(({ status }) => status === ownProps.index)
});

export default connect(mapStateToProps)(BoardColumn);