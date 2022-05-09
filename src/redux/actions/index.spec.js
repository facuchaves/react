import { searchIssues } from ".";

test('searchIssues action', () => {
  expect( searchIssues({q:'query'}) ).toMatchSnapshot();
})