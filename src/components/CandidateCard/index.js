import React from 'react';
import { connect } from 'react-redux';

import { increaseCandidateStatus } from '../../actions';
import { decreaseCandidateStatus } from '../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CandidateCard = ({
  candidate: { picture, name, status },
  candidateId,
  increaseCandidateStatus,
  decreaseCandidateStatus,
  columnIndex,
  columnsCount
}) => {
  const increaseStatus = () => {
    const newStatus = status + 1;
    increaseCandidateStatus(candidateId, newStatus);
  };

  const decreaseStatus = () => {
    const newStatus = status - 1;
    decreaseCandidateStatus(candidateId, newStatus);
  };

  return (
    <div className="candidate-card">
      <div className="candidate-card-info">
        <img className="candidate-card-info__image" alt="" src={picture.large} />
        <div className="candidate-card-info__name">
          {name.first} {name.last}
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
  columnsCount: boardColumnsReducer.length
});

const mapDispatchToProps = { increaseCandidateStatus, decreaseCandidateStatus };

export default connect(mapStateToProps, mapDispatchToProps)(CandidateCard);