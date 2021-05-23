const ACTIONS = {
  UPDATE_SEARCH_INPUT: "UPDATE_SEARCH_INPUT",
  UPDATE_RATING: "UPDATE_RATING",
  CLICK_PLAYER: "CLICK_PLAYER",
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