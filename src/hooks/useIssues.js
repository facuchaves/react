import { useContext, useEffect, useState } from "react";
import IssuesContext from "../context/IssuesContext";

//custom hook que lo uso para el manejo de gifs, seteo de gifs, paginado
//uso el gifsContext para guardar de forma global los gifs
export const useIssues = () => {
  
  //estas serian variables globales (para eso se usa el usecontext)
  const { issues, setIssues } = useContext(IssuesContext);

  //Si dejo la lista vacia del useEffect solo se renderiza 1 vez
  useEffect( () => {
      setIssues(issues);
    },
    [issues,setIssues]
  );

  return {issues};

};
