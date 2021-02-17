import {useState, useEffect} from 'react'

export default function useNearScreen ({fromRef}) {
    const [isNearScreen, setShow] = useState(false)


    useEffect(function() {
    
        const onChange = (entries, observer) => {
    
            console.log("entries", entries)
            
            const el = entries[0]
            console.log("el", el)
    
            if(el.isIntersecting){
                setShow(true)
    
                observer.disconnect()
    
            }
        }
    
    
        const observer = new IntersectionObserver(onChange, {
            //esta variable es el margen que le da desde el inicio para 
            // hacer la llamada al servicio mientras vas scroleando
            rootMargin: '100px'
        })
    
        observer.observe(fromRef.current)
    
        return () => observer.disconnect()
    })

    return isNearScreen
}