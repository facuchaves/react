import { ACTIONS } from "../actions";
import searchIssuesReducer from "./searchIssuesReducer";

test('searchIssuesReducer', () => {
  const state = {q:'Query',status:"OPEN"}
  expect( searchIssuesReducer( state, { type:ACTIONS.SEARCH_ISSUES , payload: state} ) ).toMatchSnapshot();
})