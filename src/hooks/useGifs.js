import { useContext, useEffect, useState } from "react";
import { getGifs } from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

//custom hook que lo uso para el manejo de gifs, seteo de gifs, paginado
//uso el gifsContext para guardar de forma global los gifs
export const useGifs = (
  { keyWordInput, rating } = { keyWordInput: null, rating: "g" }
) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  //estas serian variables globales (para eso se usa el usecontext)
  const { gifs, setGifs } = useContext(GifsContext);

  const [page, setPage] = useState(INITIAL_PAGE);

  // recuperamos la keyword del localStorage
  const keyWordToUse = keyWordInput || localStorage.getItem("lastKeyWord");

  //Si dejo la lista vacia del useEffect solo se renderiza 1 vez
  useEffect(
    function () {
      console.log("useEffect ejecutado de useGifs (custom Hook)");

      setLoading(true);

      getGifs({ keyWord: keyWordToUse, rating }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);

        //guardamos la keyWordToUse en el localStorage
        localStorage.setItem("lastKeyWord", keyWordToUse);
      });
    },
    [keyWordInput, keyWordToUse, setGifs, rating]
  );

  //este useEffect es para el paginado / scroll infinito
  useEffect(() => {
    if (page === INITIAL_PAGE) {
      return;
    }
    setLoadingNextPage(true);
    getGifs({ keyWord: keyWordToUse, page: page, rating }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keyWordToUse, page, rating, setGifs]);

  return { loading, gifs, setPage, loadingNextPage };
};
