import { searchEntities , createEntity } from ".";

test('searchEntities action', () => {
  expect( searchEntities({q:'query'}) ).toMatchSnapshot();
})
