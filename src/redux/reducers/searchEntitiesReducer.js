import {ACTIONS} from '../actions';

const INITIAL_STATE = {
  query: {
    repo: 'facebook/react',
    q: '',
    state: 'OPEN',
  },
};

const actionsMap = new Map([
  [
    ACTIONS.SEARCH_ENTITIES,
    (state, action) => ({
      query: {
        ...state.query,
        ...action.payload.query,
      },
    }),
  ],
]);

const searchEntitiesReducer = (state = INITIAL_STATE, action) => {
  if (actionsMap.has(action.type)) {
    return actionsMap.get(action.type)(state, action);
  }
  return state;
};

export default searchEntitiesReducer;
