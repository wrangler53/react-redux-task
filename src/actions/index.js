import * as actionTypes from '../constants/actionTypes';
import { getCandidates } from '../api';

export const requestStarted = () => ({
  type: actionTypes.REQUEST_STARTED
});

export const requestSucceeded = candidatesList => ({
  type: actionTypes.REQUEST_SUCCEEDED,
  payload: candidatesList
});

export const requestFailed = error => ({
  type: actionTypes.REQUEST_FAILED,
  error
});

export const fetchCandidates = () => dispatch => {
  dispatch(requestStarted());

  getCandidates()
    .then(candidates => {
      candidates.forEach(candidate => candidate.status = 1);
      dispatch(requestSucceeded(candidates));
    })
    .catch(error => dispatch(requestFailed(error)));
};

export const increaseCandidateStatus = (candidateId, newStatus) => ({
  type: actionTypes.INCREASE_STATUS,
  payload: { candidateId, newStatus }
});

export const decreaseCandidateStatus = (candidateId, newStatus) => ({
  type: actionTypes.DECREASE_STATUS,
  payload: { candidateId, newStatus }
});