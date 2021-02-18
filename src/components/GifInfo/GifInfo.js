import React from 'react'
import './GifInfo.css'

export default function GifInfo ({ gifInfo }){


    return (
        <div className='GifInfo'>
            <h1>{gifInfo.title}</h1>
            <img alt={gifInfo.title} src={gifInfo.img_url} />  
            <small>{gifInfo.id}</small>
        </div>
    )
}