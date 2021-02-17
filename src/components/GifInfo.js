import React from 'react'
import './Gif.css'


export default function GifInfo ({ gifInfo }){


    return (
        <div className='Info'>
            <h1>{gifInfo.title}</h1>
            <img alt={gifInfo.title} src={gifInfo.img_url} />  
            <small>{gifInfo.id}</small>
        </div>
    )
}