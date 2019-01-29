import { SET_CANDIDATES, INCREASE_STATUS, DECREASE_STATUS } from '../constants/actionTypes';

const candidatesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_CANDIDATES:
      return [...state, ...payload];
    case INCREASE_STATUS:
      const increasedStatusCandidate = state.find(({ id }) => id.value === payload.candidateId);
      increasedStatusCandidate.status = payload.newStatus;

      const newIncreasedCandidateState = state.filter(({ id }) => id.value !== payload.candidateId);

      return [...newIncreasedCandidateState, increasedStatusCandidate];
    case DECREASE_STATUS:
      const decreasedStatusCandidate = state.find(({ id }) => id.value === payload.candidateId);
      decreasedStatusCandidate.status = payload.newStatus;

      const newDecreasedCandidateState = state.filter(({ id }) => id.value !== payload.candidateId);

      return [...newDecreasedCandidateState, decreasedStatusCandidate];
    default:
      return state;
  }
};

export default candidatesReducer;