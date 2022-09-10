import {
  ACTIONS,
  createEntity,
  deleteEntity,
  searchEntities,
  searchEntity,
  updateEntity,
} from '.';

test('shoudld search entities action', () => {
  const query = {q: 'query'};
  const action = searchEntities(query);

  expect(action.type).toBe(ACTIONS.SEARCH_ENTITIES);
  expect(action.payload?.query).toBe(query);
});

test('shoudld search entity action', () => {
  const entityId = 1;
  const action = searchEntity(entityId);

  expect(action.type).toBe(ACTIONS.SEARCH_ENTITY);
  expect(action.payload?.entityId).toBe(entityId);
});

test('shoudld create entity action', () => {
  const entity = {
    id: 1,
    name: 'Entity name',
    score: 10,
  };
  const action = createEntity(entity);

  expect(action.type).toBe(ACTIONS.CREATE_ENTITY);
  expect(action.payload?.entity).toBe(entity);
});

test('shoudld update entity action', () => {
  const entity = {
    id: 1,
    name: 'Entity name',
    score: 10,
  };
  const action = updateEntity(entity);

  expect(action.type).toBe(ACTIONS.UPDATE_ENTITY);
  expect(action.payload?.entity).toBe(entity);
});

test('shoudld delete entity action', () => {
  const entityId = 1;
  const action = deleteEntity(entityId);

  expect(action.type).toBe(ACTIONS.DELETE_ENTITY);
  expect(action.payload?.entityId).toBe(entityId);
});
