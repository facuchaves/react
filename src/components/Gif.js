import React from 'react'
import { Link } from 'wouter'
import './Gif.css'


export default function Gif ({ title, id, img_url }){
    return (
        <Link to={`/gif/info/${id}`} className='Gif'>
            <h4>{title}</h4>
            <small>{id}</small>
            <img loading='lazy' alt={title} src={img_url} />  
        </Link>
    )
}