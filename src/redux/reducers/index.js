import inputKeywordReducer from "./inputKeywordReducer";
import ratingReducer from "./ratingReducer";
import { combineReducers } from "redux";
import playerClickedReducer from "./playerClickedReducer";
import searchIssuesReducer from "./searchIssuesReducer";

const allReducers = combineReducers({
  inp: inputKeywordReducer,
  rat: ratingReducer,
  playerClicked: playerClickedReducer,
  searchIssues: searchIssuesReducer,
});

export default allReducers;
