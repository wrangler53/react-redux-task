import { combineReducers } from 'redux';

import candidatesReducer from './candidates';
import boardColumnsReducer from './board-columns';

const rootReducer = combineReducers({
  candidatesReducer,
  boardColumnsReducer
});

export default rootReducer;