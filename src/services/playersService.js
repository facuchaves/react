export const getPlayers = async () => {

  const urlGetPlayers = `http://localhost:5000/api/players`;
  
  return fetch(urlGetPlayers)
  .then( res => res.json() )
  .then( resJson => resJson.map( player => ({ id: player.id, playerNameCol: player.name, playerScoreCol: player.score })) )

};
