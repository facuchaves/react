import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchInput, updateRating } from "../../redux/actions";
const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchFormHome = () => {
  const [path, pushLocation] = useLocation();

  const rating = useSelector((state) => state.rat);
  const input = useSelector((state) => state.inp);
  const dispatch = useDispatch();

  console.log({ rating });
  console.log({ input });

  const manejarSubmit = useCallback(
    (event) => {
      //evito que no se refresque la pantalla
      event.preventDefault();

      //navegar a otra ruta
      pushLocation(`/gif/${input.searchInput}/${rating.rating}`);
    },
    [pushLocation, rating.rating, input.searchInput]
  );

  const manejarSearchInput = (event) => {
    //with redux!
    //this is only as an example, because is not a good idea call the dispatch in every single change.
    //The correct way shuld be calling the dispatch when the user submi the form (manejarSubmit).
    // And here (manejarSerchInput) could be updating a local hook

    //(obviously this is only to learn about redux, because with a local hook on this component is gonna work perfectly)
    dispatch(updateSearchInput(event.target.value));
  };

  const manejarRating = (event) => {
    //with redux!
    // Here same good practice to manejarSearchInput
    dispatch(updateRating(event.target.value));
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        placeholder="Ingresá un texto..."
        type="text"
        onChange={manejarSearchInput}
        value={input.searchInput}
      />

      <select onChange={manejarRating} value={rating.rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>

      <button>Buscar</button>
      <small>{input.times}</small>
    </form>
  );
};

//basicamente con el react.memo lo que hacemos es que solo se renderice este compoenente
// en el caso de que sus props se modifiquen
export default React.memo(SearchFormHome);
