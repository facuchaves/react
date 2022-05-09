import { combineReducers } from "redux";
import searchIssuesReducer from "./searchIssuesReducer";

const allReducers = combineReducers({
  issuesStore: searchIssuesReducer,
});

export default allReducers;
