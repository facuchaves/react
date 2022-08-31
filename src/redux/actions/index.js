export const ACTIONS = {
  SEARCH_ENTITIES: 'SEARCH_ENTITIES',
};

export const searchEntities = (query) => ({
  type: ACTIONS.SEARCH_ENTITIES,
  payload: {
    query: query,
  },
});
