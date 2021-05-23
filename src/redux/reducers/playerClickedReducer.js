const ACTIONS = {
  UPDATE_SEARCH_INPUT: "UPDATE_SEARCH_INPUT",
  UPDATE_RATING: "UPDATE_RATING",
  CLICK_PLAYER: "CLICK_PLAYER",
};

const INITIAL_STATE = {
  isClicked: false,
};

const playerClickedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CLICK_PLAYER:
      return {
        ...state,
        isClicked:true
      };
    default:
      return state;
  }
};

export default playerClickedReducer;
