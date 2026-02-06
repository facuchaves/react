// require('dotenv').config();
// import sleep from '../utils';
import axios from 'axios';

let entities = [
  {id: 1, name: 'Dave Patrick', score: 10},
  {id: 2, name: 'Peter Pretrelli', score: 20},
  {id: 3, name: 'John Week', score: 30},
  // {id: 4, name: 'David Coperfield', score: 40},
  // {id: 5, name: 'Diego Bounanote', score: 50},
  //   {id: 6, name: 'Angel David Comizo', score: 60},
  //   {id: 7, name: 'Dark Vather', score: 70},
  //   {id: 8, name: 'Elon Musk', score: 80},
  //   {id: 9, name: 'Julio Cesar', score: 90},
];

export const getEntities = async () => entities;
// axios
//   .get(`${process.env.REACT_APP_BASE_URL_APIREST}/api/resource`)
//   .then((res: any) => res.data);

export const getEntity = async (entityId: number) =>
  (await getEntities()).find((entity: any) => entity.entity_id === entityId);

// const urlGetEntity = `${process.env.REACT_APP_BASE_URL_APIREST}/api/resource/${entityId}`;
// return fetch(urlGetEntity).then((res: any) => res.json());

export const createEntity = async (entityToCreate: any) => {
  entities.push(entityToCreate);
  // const OK = {statusCode: 200};
  // const ERROR_500 = {statusCode: 500, message: []};
  const ERROR_400 = {
    statusCode: 400,
    message: [
      'id must be an integer number',
      'name must be a string',
      'score must not be greater than 100',
      'score must not be less than 0',
      'score must be an integer number',
    ],
    error: 'Bad Request',
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

export const updateEntity = async (entityToUpdate: any) => {
  const {id, name, score} = entityToUpdate;
  const existingEntity = await getEntity(id);
  if (existingEntity) {
    existingEntity.name = name;
    existingEntity.score = score;
  }
};

export const deleteEntity = async (entityIdTodelete: number) => {
  const existingEntity = await getEntity(entityIdTodelete);
  if (existingEntity) {
    entities = (await getEntities()).filter(
      (entity: any) => entity.id !== entityIdTodelete,
    );
  }
};
