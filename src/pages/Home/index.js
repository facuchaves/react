import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import LazyTrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import './Home.css'

export const Home = () => {

    const [searchInput, setSearchInput] = useState('')
    
    const [path, pushLocation] = useLocation()

    //hook que creamos nosotros (custom hook)
    const {loading, gifs, setPage} = useGifs()


    const manejarSubmit = event => {
        //evito que no se refresque la pantalla
        event.preventDefault()

        //navegar a otra ruta
        pushLocation(`/gif/${searchInput}`)
    }

    const manejarChange  = event => {
        setSearchInput(event.target.value)
    }


    const externalRef = useRef()

    const isNearScreen = useNearScreen({externalRef: loading ? null : externalRef, once: false})


    const handleNextPage = () => {
        console.log("proxima pagina!")
        setPage(prevPage => prevPage + 1)
    }
    
    //el useCallback lo usamos para que "guarde" una funcion y no se vuelva a crear cada vez que se renderice la pagina
    // de la misma forma que el useEffect solo se ejecutará una vez si no tienen ningun parametro en los corchetes []
    // idem useEffect se volvera a crear cada vez que algun valor de los corchetes cambie
    const debounceHandleNextPage = useCallback(
        //el debounce lo tuve que instalar y funciona para que no se pueda cargar muchas veces si no que genere un delay
        debounce(
            () => handleNextPage(), 200)
        ,[])

    useEffect(() => {

        if(isNearScreen){
            debounceHandleNextPage()
        }
    }, [debounceHandleNextPage, isNearScreen])

    return (
        <>
            <form onSubmit={manejarSubmit}>
                <input placeholder='Ingresá un texto...' type='text' onChange={manejarChange} value={searchInput} />
                <button>Buscar</button>
            </form>

            <h3>Gifs mas populares</h3>

            <div className='LinksWrapper'>
                <Link to='/gif/panda'>Gifs de Pandas</Link>
                <Link to='/gif/argentina'>Gifs de Argentina</Link>
                <Link to='/gif/brasil'>Gifs de Brasil</Link>
            </div>

            <LazyTrendingSearches />
            
            <h5>Ultima Busqueda</h5>
            <ListOfGifs gifs={gifs} />
            

            <div id='visor' ref={externalRef}></div>

        </>

    )
}