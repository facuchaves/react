require('dotenv').config()

export const getEntities = () => {

  const urlGetEntities = process.env.REACT_APP_BASE_URL_APIREST + '/api/resource';
  
  return fetch(urlGetEntities)
  .then( res => res.json() )

};

export const getEntity = entityId => {

  const urlGetEntity = process.env.REACT_APP_BASE_URL_APIREST + '/api/resource/' + entityId;
  
  return fetch(urlGetEntity)
  .then( res => res.json() )

};

export const createEntity = async entityToCreate => {
  const OK = { statusCode : 200 };
  const ERROR_500 = { statusCode : 500 ,"message": []};
  const ERROR_400 = {
    "statusCode": 400,
    "message": [
      "id must be an integer number",
      "name must be a string",
      "score must not be greater than 100",
      "score must not be less than 0",
      "score must be an integer number"
    ],
    "error": "Bad Request"
  };

  return ERROR_400;
  // const urlGetEntity = process.env.REACT_APP_BASE_URL_APIREST + '/api/resource/';
  
  // return fetch(urlGetEntity,{
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(entityToCreate)
  // }).then( res => res.json() )

};
