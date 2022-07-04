import { useContext, useEffect, useState } from "react";
import EntitiesContext from "../context/EntitiesContext";
import { getEntity } from "../services/entityService";

//custom hook que lo uso para el manejo de gifs, seteo de gifs, paginado
//uso el gifsContext para guardar de forma global los gifs
export const useEntity = (entityId) => {
  
  //estas serian variables globales (para eso se usa el usecontext)
  const { entity, setEntity } = useContext(EntitiesContext);

  //Si dejo la lista vacia del useEffect solo se renderiza 1 vez
  useEffect( () => {
      getEntity(entityId).then( entity =>
        setEntity(entity)
      )
    },
    []
  );

  return entity;

};
