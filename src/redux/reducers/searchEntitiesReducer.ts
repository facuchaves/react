import {ACTIONS} from '../actions';

const INITIAL_STATE = {
  query: {
    repo: 'facebook/react',
    q: '',
    state: 'OPEN',
  },
};

const DEFAULT_ACTION: {type: string; payload: any} = {type: '', payload: {}};

const actionsMap = new Map([
  [
    ACTIONS.SEARCH_ENTITIES,
    (state: {query: any}, payload: {query: any}) => ({
      query: {
        ...state.query,
        ...payload.query,
      },
    }),
  ],
]);

const searchEntitiesReducer = (
  state = INITIAL_STATE,
  {type, payload} = DEFAULT_ACTION,
) => {
  if (actionsMap.has(type)) {
    return actionsMap.get(type)(state, payload);
  }
  return state;
};

export default searchEntitiesReducer;
