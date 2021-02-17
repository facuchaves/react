import {useContext} from 'react'
import GifsContext from '../context/GifsContext'


//este es un custom hook que lo uso para retornar la info
//que tengo almacenada en el context
export default function useGlobalGifs() {

    const {gifs} = useContext(GifsContext)

    return gifs

}