export const ACTIONS = {
  UPDATE_SEARCH_INPUT: "UPDATE_SEARCH_INPUT",
  UPDATE_RATING: "UPDATE_RATING",
  CLICK_PLAYER: "CLICK_PLAYER",
  SEARCH_ISSUES: "SEARCH_ISSUES",
};

export const updateSearchInput = (searchInput) => {
  return {
    type: ACTIONS.UPDATE_SEARCH_INPUT,
    payload: searchInput,
  };
};

export const updateRating = (rating) => {
  return {
    type: ACTIONS.UPDATE_RATING,
    payload: rating,
  };
};

export const clickPlayer = () => {
  return {
    type: ACTIONS.CLICK_PLAYER,
  };
};

export const searchIssues = ( query ) => {
  console.log("Action")
  console.log("query: ",query)
  return {
    type: ACTIONS.SEARCH_ISSUES,
    payload: query,
  };
};