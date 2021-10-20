require('dotenv').config()

export const getPlayers = async () => {

  const urlGetPlayers = process.env.REACT_APP_BASE_URL_APIREST + '/api/resource';
  
  return fetch(urlGetPlayers)
  .then( res => res.json() )
  .then( resJson => resJson.map( player => ({ id: player.id, playerNameCol: player.name, playerScoreCol: player.score })) )

};
