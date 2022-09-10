export const ACTIONS = {
  SEARCH_ENTITIES: 'SEARCH_ENTITIES',
};

export const searchEntities = (query: any) => ({
  type: ACTIONS.SEARCH_ENTITIES,
  payload: {
    query,
  },
});
