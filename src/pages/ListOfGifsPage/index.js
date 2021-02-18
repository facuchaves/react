import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

export const ListOfGifsPage = ({ params }) => {
    
    const {keyWordInput} = params 

    //hook que creamos nosotros (custom hook)
    const {loading, gifs, setPage} = useGifs({keyWordInput})
    
    const handleNextPage = () => {
      setPage(prevPage => prevPage + 1)
    }
    
    return (

      <>
      {
        loading ? (
          <div>cargando... </div>
        ) : (

          <ListOfGifs gifs={gifs} />
        )

      }

        <button onClick={handleNextPage}>Ir a la Siguiente Pagina</button>
      
      </>
    )

    
}