import { useReducer } from "react";

const ACTIONS = {
  UPDATE_SEARCH_INPUT: "update_search_input",
  UPDATE_RATING: "update_rating",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
        times: state.times + 1,
      };

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    default:
      return state;
  }
};

export default function useForm({ initialKeyword, initialRating }) {
  const INITIAL_STATE = {
    searchInput: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { searchInput, rating, times } = state;

  return {
    searchInput,
    rating,
    times,
    updateSearchInput: (searchInput) =>
      dispatch({
        type: ACTIONS.UPDATE_SEARCH_INPUT,
        payload: searchInput,
      }),
    updateRating: (rating) =>
      dispatch({
        type: ACTIONS.UPDATE_RATING,
        payload: rating,
      }),
  };
}
