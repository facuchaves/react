import React, {useState, useEffect, useContext} from 'react'
import StaticContext from '../../context/StaticContex'
import GifInfo from '../../components/GifInfo'
import useGlobalGifs from '../../hooks/useGlobalGifs'
import { getGifInfo } from '../../services/getGifs'

export const GifInfoPage = ({ params }) => {

    //usando use context para valor globales
    const contextGuardado = useContext(StaticContext)
    console.log(contextGuardado)


    //usando use context para valor globales donde guardamos todos los gifs
    const gifs = useGlobalGifs()
    console.log(gifs)


    const { keyWordInput } = params

    const [gifInfo, setGifInfo] = useState({})

    useEffect(function() {
        console.log("useEffect ejecutado de gifinfo page")
        
        getGifInfo({ gifId: keyWordInput }).then(gifInformation => setGifInfo(gifInformation))  
      }, [])


    return (
        <>
        <GifInfo gifInfo={gifInfo} />
        <div> Solo para practicar:</div>
        <div> Info recuperada del context</div>
        <ul>
            {
                gifs.map(specific_gif => (
                    <li key={specific_gif.id}>
                        {specific_gif.title}
                    </li>
                ))
            }
        </ul>

        </>
    )
}