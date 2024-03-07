export const rejectReducer = (state, action) => {
  state.isFetching = false;
  state.error = action.payload;
};

export const pendingReducer = (state, action) => {
  state.isFetching = true;
  state.error = null;
};