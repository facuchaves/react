const ACTIONS = {
  UPDATE_SEARCH_INPUT: "UPDATE_SEARCH_INPUT",
  UPDATE_RATING: "UPDATE_RATING",
};

const INITIAL_STATE = {
  times: 0,
  searchInput: "",
};

const inputKeywordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
        times: state.times + 1,
      };
    default:
      return state;
  }
};

export default inputKeywordReducer;
