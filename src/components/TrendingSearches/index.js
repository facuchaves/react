import React, {useRef, Suspense} from 'react'
import useNearScreen from '../../hooks/useNearScreen'

//con esto devolvemos un import dinamico para que solo sea
//importado cuando lo necesitamos(asicrono)
//este concepto se llama "lazy load"
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)



//Con esta funcion, logras que se haga el llamado al servicio NO cuando carga la pagina
//sino que se hace mientras vas scroleando y te "acercas" al lugar donde se va a necesitar ese llamado
export default function LazyTrendingSearches() {
    
    const fromRef = useRef()
    
    const isNearScreen = useNearScreen({fromRef})
    
    
    return <div ref={fromRef}>
        {/* este Esta cargando... j0 solo va a aparecer hasta que se renderice el elemento
        //al ser un llamado bastante rapido es por eso que en el codigo ni lo lleguemos a ver y 
        // ya veamos cargadas las tendencias de busqueda */}
        
        {/* el Suspense se debera usar siempre que usemos el concepto de lazy load. leer todo este doc para entender este comentario */}
        <Suspense fallback={'Esta cargando... j0'}>
            { isNearScreen ? <TrendingSearches /> : null}

        </Suspense>
    </div>
}