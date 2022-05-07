import { ACTIONS } from "../actions";

const INITIAL_STATE = {
  q:"",
  status:"OPEN"
};

const searchIssuesReducer = (state = INITIAL_STATE, action) => {
  console.log("reducer")
  console.log("action: ",action)
  console.log("state: ",state)
  switch (action.type) {
    case ACTIONS.SEARCH_ISSUES:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchIssuesReducer;
