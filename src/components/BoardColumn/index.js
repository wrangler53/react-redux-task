import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import CandidateCard from '../CandidateCard';

import './_BoardColumn.scss';

const BoardColumn = ({ columnName, columnIndex, candidates }) => (
  <div className="board-column">
    <div className="board-column__header">{columnName} {candidates && `(${candidates.length})`}</div>
    <div className="board-column__items">
      {
        candidates && candidates.map(({ id }) =>
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
      .filter(({ status }) => status === columnIndex) // render candidates in columns according to their status
      .filter(({ name: { first: firstName, last: lastName } }) =>
        (!(candidatesReducer.filters && candidatesReducer.filters.name)) ?
          true :
          new RegExp(candidatesReducer.filters.name, 'i').test(`${firstName} ${lastName}`)
      ) // filter candidates by entered name in name filter
      .filter(({ location: { city } }) =>
        (!(candidatesReducer.filters && candidatesReducer.filters.city)) ?
          true :
          new RegExp(candidatesReducer.filters.city, 'i').test(city)
      ) // filter candidates by entered city in city filter
});

BoardColumn.propTypes = {
  columnName: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(BoardColumn);