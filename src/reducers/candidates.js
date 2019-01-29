import * as actionTypes from '../constants/actionTypes';

const candidatesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_STARTED:
      return { ...state, isLoading: true };
    case actionTypes.REQUEST_SUCCEEDED:
      return { ...state, ...action.payload, isLoading: false };
    case actionTypes.REQUEST_FAILED:
      return { ...state, error: action.error.message, isLoading: false };

    case actionTypes.INCREASE_STATUS:
      const increasedStatusCandidate = state.find(({ id }) => id.value === action.payload.candidateId);
      increasedStatusCandidate.status = action.payload.newStatus;

      const newIncreasedCandidateState = state.filter(({ id }) => id.value !== action.payload.candidateId);

      return [...newIncreasedCandidateState, increasedStatusCandidate];
    case actionTypes.DECREASE_STATUS:
      const decreasedStatusCandidate = state.find(({ id }) => id.value === action.payload.candidateId);
      decreasedStatusCandidate.status = action.payload.newStatus;

      const newDecreasedCandidateState = state.filter(({ id }) => id.value !== action.payload.candidateId);

      return [...newDecreasedCandidateState, decreasedStatusCandidate];
    default:
      return state;
  }
};

export default candidatesReducer;