import {useState, useEffect, useRef} from 'react'


//Este custom hook retorna un booleano si estoy cerca o no de la seccion de la pagina, de esta forma activo alguna logica
//por ejemplo cargas mas gifs (scroll infinito ó "Tendencias de busqueda")
export default function useNearScreen ({externalRef, once = true}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()


    useEffect(function() {

        const element = externalRef ? externalRef.current : fromRef.current
    
        const onChange = (entries, observer) => {
    
            //console.log("entries", entries)
            
            const el = entries[0]
            //console.log("el", el)
    
            if(el.isIntersecting){
                setShow(true)
    
                once && observer.disconnect()
    
            }else {
                !once && setShow(false)
            }
        }
    
    
        const observer = new IntersectionObserver(onChange, {
            //esta variable es el margen que le da desde el inicio para 
            // hacer la llamada al servicio mientras vas scroleando
            rootMargin: '100px'
        })
    
        if (element) observer.observe(element)
    
        return () => observer && observer.disconnect()
    })

    return isNearScreen
}