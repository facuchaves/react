import React, {useState, useEffect} from 'react'
import {getTrendingTerms} from '../../services/getTrendingTermsService'

export default function TrendingSearches() {
    const [trends, setTrends] = useState([]) 

    useEffect(() => {
        getTrendingTerms().then(trendsResponse => setTrends(trendsResponse))

    }, [])

    return (

        <>
        <div>Tendencias de busqueda:</div>
        <ul>
            {
                trends.map((each_trend, index) => (
                    <li key={index}>
                        {each_trend}
                    </li>
                ))
            }
        </ul>

        </>

    )
}