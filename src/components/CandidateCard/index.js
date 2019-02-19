import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { increaseCandidateStatus } from '../../actions';
import { decreaseCandidateStatus } from '../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './_CandidateCard.scss';

const CandidateCard = ({
  candidate,
  candidateIndex,
  increaseCandidateStatus,
  decreaseCandidateStatus,
  columnIndex,
  columnsCount
}) => {
  // Move candidate to the next column
  const increaseStatus = () => {
    const newStatusCandidate = { ...candidate };
    newStatusCandidate.status++;
    increaseCandidateStatus(newStatusCandidate, candidateIndex);
  };

  // Move candidate to the previous column
  const decreaseStatus = () => {
    const newStatusCandidate = { ...candidate };
    newStatusCandidate.status--;
    decreaseCandidateStatus(newStatusCandidate, candidateIndex);
  };

  return (
    <div className="candidate-card">
      <div className="candidate-card-info">
        <img className="candidate-card-info__image" alt="" src={candidate.picture.large} />
        <div className="candidate-card-info__main">
          <div className="candidate-card-info__main-name">
            {candidate.name.first} {candidate.name.last}
          </div>
          <div className="candidate-card-info__main-city">
            {candidate.location.city}
          </div>
        </div>
      </div>
      <div className="candidate-card-controls">
        {
          columnIndex !== 1 && <FontAwesomeIcon
            icon={faAngleLeft}
            className="candidate-card-controls__item"
            onClick={decreaseStatus}
          />
        }
        {
          columnIndex !== columnsCount && <FontAwesomeIcon
            icon={faAngleRight}
            className="candidate-card-controls__item"
            onClick={increaseStatus}
          />
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ candidatesReducer, boardColumnsReducer }, { candidateId }) => ({
  candidate: Object.values(candidatesReducer).find(({ id }) => id.value === candidateId),
  candidateIndex: Object.values(candidatesReducer).findIndex(({ id }) => id.value === candidateId),
  columnsCount: boardColumnsReducer.length
});

const mapDispatchToProps = { increaseCandidateStatus, decreaseCandidateStatus };

CandidateCard.propTypes = {
  candidate: PropTypes.object.isRequired,
  candidateIndex: PropTypes.number.isRequired,
  columnsCount: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  increaseCandidateStatus: PropTypes.func.isRequired,
  decreaseCandidateStatus: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateCard);