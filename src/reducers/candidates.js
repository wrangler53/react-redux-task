import { SET_CANDIDATES } from '../constants/actionTypes';

const candidatesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_CANDIDATES:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default candidatesReducer;