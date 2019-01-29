import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CandidateCard = ({ candidateName, candidatePicture }) => (
  <div className="candidate-card">
    <div className="candidate-card-info">
      <img className="candidate-card-info__image" alt="" src={candidatePicture.large} />
      <div className="candidate-card-info__name">
        {candidateName.first} {candidateName.last}
      </div>
    </div>
    <div className="candidate-card-controls">
      <FontAwesomeIcon icon={faAngleLeft} className="candidate-card-controls__item"/>
      <FontAwesomeIcon icon={faAngleRight} className="candidate-card-controls__item"/>
    </div>
  </div>
);

export default CandidateCard;