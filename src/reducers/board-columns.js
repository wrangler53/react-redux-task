/*
  To render an additional column on a board, just add
  to the initialState array an object with required field 'index'
  (its value should be greater by 1 than in previous object)
  and optional field 'name'
*/

const initialState = [{
  name: 'Applied',
  index: 1
}, {
  name: 'Interviewing',
  index: 2
}, {
  name: 'Hired',
  index: 3
}];

const boardColumnsReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default boardColumnsReducer;