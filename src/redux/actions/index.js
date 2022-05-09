export const ACTIONS = {
  SEARCH_ISSUES: "SEARCH_ISSUES",
};

export const searchIssues = ( query ) => {
  return {
    type: ACTIONS.SEARCH_ISSUES,
    payload: query,
  };
};