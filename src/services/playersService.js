export const getPlayers = async () => {

  const urlGetPlayers = `http://localhost:5000/api/players`;
  
  const playersRes = await fetch(urlGetPlayers)
  debugger;
  return playersRes.map( player => ({ id: player.id, playerNameCol: player.name, playerScoreCol: player.score }));
  
};
