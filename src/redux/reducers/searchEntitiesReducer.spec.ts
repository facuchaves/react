import {ACTIONS} from '../actions';
import searchIssuesReducer from './searchEntitiesReducer';

test('searchIssuesReducer', () => {
  const state = {
    query: {
      repo: 'facebook/react',
      q: '',
      state: 'OPEN',
    },
  };

  const payload = {
    query: {
      q: 'Query',
      state: 'CLOSED',
    },
  };

  expect(
    searchIssuesReducer(state, {type: ACTIONS.SEARCH_ENTITIES, payload}),
  ).toMatchSnapshot();
});
