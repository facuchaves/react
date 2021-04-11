import inputKeywordReducer from "./inputKeywordReducer";
import ratingReducer from "./ratingReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  inp: inputKeywordReducer,
  rat: ratingReducer,
});

export default allReducers;
