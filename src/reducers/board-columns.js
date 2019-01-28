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

const boardColumnsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default boardColumnsReducer;