import { ACTIONS } from "../actions";

const INITIAL_STATE = {
  query: {
    repo:"facebook/react",
    q:"",
    state:"OPEN"
  }
};

const searchIssuesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH_ISSUES:
      return {
        query: {
          ...state.query,
          ...action.payload.query,
        }
      };
    default:
      return state;
  }
};

export default searchIssuesReducer;
