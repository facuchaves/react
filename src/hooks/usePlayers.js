import { useContext, useEffect, useState } from "react";
import { getPlayers } from "../services/playersService";
import PlayersContext from "../context/PlayersContext";

//custom hook que lo uso para el manejo de gifs, seteo de gifs, paginado
//uso el gifsContext para guardar de forma global los gifs
export const usePlayers = ({ playersName } = { playersName: "g" }) => {
  
  //estas serian variables globales (para eso se usa el usecontext)
  const { players, setPlayers } = useContext(PlayersContext);

  //Si dejo la lista vacia del useEffect solo se renderiza 1 vez
  useEffect(
    function () {
      getPlayers().then((playersRes) => {
        setPlayers(playersRes);
      });
    },
    [players,setPlayers]
  );

  return players;

};
