const ACTIONS = {
  UPDATE_SEARCH_INPUT: "UPDATE_SEARCH_INPUT",
  UPDATE_RATING: "UPDATE_RATING",
};

const INITIAL_STATE = {
  rating: "g",
};

const ratingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    default:
      return state;
  }
};

export default ratingReducer;
