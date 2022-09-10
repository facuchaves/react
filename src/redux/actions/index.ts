export const ACTIONS = {
  SEARCH_ENTITIES: 'SEARCH_ENTITIES',
  SEARCH_ENTITY: 'SEARCH_ENTITY',
  CREATE_ENTITY: 'CREATE_ENTITY',
  UPDATE_ENTITY: 'UPDATE_ENTITY',
  DELETE_ENTITY: 'DELETE_ENTITY',
};

export const searchEntities = (query: any) => ({
  type: ACTIONS.SEARCH_ENTITIES,
  payload: {
    query,
  },
});

export const searchEntity = (entityId: number) => ({
  type: ACTIONS.SEARCH_ENTITY,
  payload: {
    entityId,
  },
});

export const createEntity = (entity: any) => ({
  type: ACTIONS.CREATE_ENTITY,
  payload: {
    entity,
  },
});

export const updateEntity = (entity: any) => ({
  type: ACTIONS.UPDATE_ENTITY,
  payload: {
    entity,
  },
});

export const deleteEntity = (entityId: number) => ({
  type: ACTIONS.DELETE_ENTITY,
  payload: {
    entityId,
  },
});
