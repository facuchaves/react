import { useContext, useEffect, useState } from "react";
import { GetIssues } from "../services/issuesService";
import IssuesContext from "../context/IssuesContext";

//custom hook que lo uso para el manejo de gifs, seteo de gifs, paginado
//uso el gifsContext para guardar de forma global los gifs
export const useIssues = ({ issuesName } = { issuesName: "g" }) => {
  
  //estas serian variables globales (para eso se usa el usecontext)
  const { issues, setIssues } = useContext(IssuesContext);

  //Si dejo la lista vacia del useEffect solo se renderiza 1 vez
  useEffect(
    function () {
      GetIssues().then((issuesRes) => {
        setIssues(issuesRes);
      });
    },
    [issues,setIssues]
  );

  return issues;

};
