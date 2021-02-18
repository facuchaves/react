import React from 'react';
import Gif from '../Gif/Gif';
import './ListOfGifs.css' 

export default function ListOfGifs({ gifs }) {

  return (
      <div className='ListOfGifs'>
        {
          gifs.map(({id, title, img_url }) => {
            return <Gif 
            key={id}
            title={title} 
            id={id} 
            img_url={img_url}
            />        
          }) 

        }
      </div>

  )   
}