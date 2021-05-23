import inputKeywordReducer from "./inputKeywordReducer";
import ratingReducer from "./ratingReducer";
import { combineReducers } from "redux";
import playerClickedReducer from "./playerClickedReducer";

const allReducers = combineReducers({
  inp: inputKeywordReducer,
  rat: ratingReducer,
  playerClicked: playerClickedReducer,
});

export default allReducers;
