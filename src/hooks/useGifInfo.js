import {useEffect, useState} from 'react'
import { getGifInfo } from '../services/getGifs'

//custom hook para la pagina gif Info page, todo esto lo podria haber hecho en gifInfoPAge
// pero de esta forma queda mas ordenado el codigo
const useGifInfo = (keyWordInput) => {

    const [gifInfo, setGifInfo] = useState({})
    
    useEffect(function() {
        console.log("useEffect ejecutado en el custom hook useGifInfo")
        
        getGifInfo({ gifId: keyWordInput }).then(gifInformation => setGifInfo(gifInformation))  
    }, [keyWordInput])
    

    return (gifInfo)
}

export default useGifInfo
