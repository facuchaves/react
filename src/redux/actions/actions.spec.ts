import {searchEntities} from '.';

test('searchEntities action', () => {
  expect(searchEntities({q: 'query'})).toMatchSnapshot();
});
