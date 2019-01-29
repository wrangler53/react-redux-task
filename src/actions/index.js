import { SET_CANDIDATES, INCREASE_STATUS, DECREASE_STATUS } from '../constants/actionTypes';

export const setCandidates = candidatesList => ({
  type: SET_CANDIDATES,
  payload: candidatesList
});

export const increaseCandidateStatus = (candidateId, newStatus) => ({
  type: INCREASE_STATUS,
  payload: { candidateId, newStatus }
});

export const decreaseCandidateStatus = (candidateId, newStatus) => ({
  type: DECREASE_STATUS,
  payload: { candidateId, newStatus }
});