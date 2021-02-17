import {useContext, useEffect, useState} from 'react'
import {getGifs} from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export const useGifs = ({ keyWordInput } = {keyWordInput: null}) => {
    
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)
    
    // recuperamos la keyword del localStorage
    const keyWordToUse = keyWordInput || localStorage.getItem('lastKeyWord')

    //Si dejo la lista vacia solo se renderiza 1 vez
    useEffect(function() {
      console.log("useEffect ejecutado de useGifs (custom Hook)")
    
      setLoading(true)

      

      
      getGifs({ keyWord: keyWordToUse})
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)

          //guardamos la keyword en el localStorage
          localStorage.setItem('lastKeyWord', keyWordInput)
      })    
    }, [keyWordInput, keyWordToUse, setGifs])


    useEffect(() => {
      if (page === INITIAL_PAGE){
        return
      } 

      setLoadingNextPage(true)
      getGifs({ keyWord: keyWordToUse, page: page})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(true)
        })
    }, [keyWordToUse, page, setGifs])

    return {loading, gifs, setPage, loadingNextPage}
}
