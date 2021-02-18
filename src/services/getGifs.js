import {API_KEY} from './settings'
import {API_URL} from './settings'


export const getGifs = ({ keyWord= 'cats', limit = 10, page = 0 } = {}) => {

    const apiGifURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyWord}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    
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



export const getGifInfo = ({ gifId= "TqiwHbFBaZ4ti" }) => {
  
  const apiGifURL = `${API_URL}/gifs/${gifId}?api_key=${API_KEY}`

  return fetch(apiGifURL)
  .then(res => res.json())
  .then(response => {
    const {data} = response

    const gifInfo = {
      img_url: data.images.downsized_medium.url,
      id: data.id,
      title: data.title,
    }
    
    return gifInfo
  })
}
