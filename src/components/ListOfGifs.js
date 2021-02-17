import React from 'react';
import Gif from './Gif'

export default function ListOfGifs({ gifs }) {

  return (
      gifs.map(({id, title, img_url }) => {
        return <Gif 
        key={id}
        title={title} 
        id={id} 
        img_url={img_url}
        />        
      })  
  )   
}