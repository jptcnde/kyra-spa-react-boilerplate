

export const initialState = {
  fetching: false,
}

export const setFetching = (state, fetching) => ({
  ...state,
  fetching
});

export default {
  setFetching,
}