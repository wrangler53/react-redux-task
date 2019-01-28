import { combineReducers } from 'redux';

import candidatesReducer from './candidates';

const rootReducer = combineReducers({
  candidatesReducer
});

export default rootReducer;