import { SET_CANDIDATES } from '../constants/actionTypes';

export const setCandidates = candidatesList => ({
  type: SET_CANDIDATES,
  payload: candidatesList
});