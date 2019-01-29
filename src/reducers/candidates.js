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
      return {
        ...state,
        [action.payload.candidateIndex]: action.payload.candidate
      };

    case actionTypes.DECREASE_STATUS:
      return {
        ...state,
        [action.payload.candidateIndex]: action.payload.candidate
      };

    case actionTypes.SEARCH_BY_CITY:
      return {
        ...state,
        filters: { city: action.payload }
      };

    default:
      return state;
  }
};

export default candidatesReducer;