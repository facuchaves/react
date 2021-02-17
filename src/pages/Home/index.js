import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import LazyTrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'

export const Home = () => {

    const [searchInput, setSearchInput] = useState('')
    
    const [path, pushLocation] = useLocation()

    //hook que creamos nosotros (custom hook)
    const {loading, gifs} = useGifs()

    const manejarSubmit = event => {
        //evito que no se refresque la pantalla
        event.preventDefault()

        //navegar a otra ruta
        pushLocation(`/gif/${searchInput}`)
    }

    const manejarChange  = event => {
        setSearchInput(event.target.value)
    }

    return (
        <>
            <form onSubmit={manejarSubmit}>
                <input placeholder='Ingresá un texto...' type='text' onChange={manejarChange} value={searchInput} />
                <button>Buscar</button>
            </form>

            <h3>Gifs mas populares</h3>


            <Link to='/gif/panda'>Gifs de Pandas</Link>
            <Link to='/gif/argentina'>Gifs de Argentina</Link>
            <Link to='/gif/brasil'>Gifs de Brasil</Link>

            
            <h5>Ultima Busqueda</h5>
            <ListOfGifs gifs={gifs} />

            <LazyTrendingSearches />
        </>

    )
}