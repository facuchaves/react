import {API_KEY} from './settings'
import {API_URL} from './settings'


export const getTrendingTerms = () => {

    const apiTrendingTerms = `${API_URL}/trending/searches?api_key=${API_KEY}`
    
    return fetch(apiTrendingTerms)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      return data
    })
}



export const getGifs = ({ keyWord= 'cats' } = {}) => {

  const apiGifURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyWord}&limit=10&offset=0&rating=g&lang=en`
  
  return fetch(apiGifURL)
  .then(res => res.json())
  .then(response => {
    const {data} = response
    const gifs = data.map(image => 
      {
          const {title, id} = image
          const img_url = image.images.downsized_medium.url

          return { title, id, img_url }
      }
    )
    return gifs
  })
}