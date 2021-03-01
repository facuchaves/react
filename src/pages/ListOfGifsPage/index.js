import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import SearchFormHome from "../../components/SearchForm";

export const ListOfGifsPage = ({ params }) => {
  const { keyWordInput, rating = "g" } = params;

  //hook que creamos nosotros (custom hook)
  const { loading, gifs, setPage } = useGifs({ keyWordInput, rating });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchFormHome initialKeyword={keyWordInput} initialRating={rating} />
      {loading ? <div>cargando... </div> : <ListOfGifs gifs={gifs} />}

      <button onClick={handleNextPage}>Ir a la Siguiente Pagina</button>
    </>
  );
};
