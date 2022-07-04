import { combineReducers } from "redux";
import searchEntitiesReducer from "./searchEntitiesReducer";

const allReducers = combineReducers({
  entitiesStore: searchEntitiesReducer,
});

export default allReducers;
