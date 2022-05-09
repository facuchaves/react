import { ACTIONS } from "../actions";

const INITIAL_STATE = {
  query: {
    repo:"facebook/react",
    q:"",
    state:"OPEN"
  }
};

const searchIssuesReducer = (state = INITIAL_STATE, action) => {
  console.log("action.payload : " , action.payload)
  console.log("state : " , state)
  switch (action.type) {
    case ACTIONS.SEARCH_ISSUES:
      return {
        query: {
          repo:state.query.repo,
          q:action.payload.q,
          state:action.payload.state,
        }
      };
    default:
      return state;
  }
};

export default searchIssuesReducer;
