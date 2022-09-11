/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

// Define a type for the slice state
interface EntityState {
  entities: Array<any>;
}

// Define the initial state using that type
const initialState: EntityState = {
  entities: [
    {id: 1, name: 'Dave Patrick', score: 10},
    {id: 2, name: 'Peter Pretrelli', score: 20},
    {id: 3, name: 'John Week', score: 30},
    {id: 4, name: 'David Coperfield', score: 40},
    {id: 5, name: 'Diego Bounanote', score: 50},
    {id: 6, name: 'Angel David Comizo', score: 60},
    {id: 7, name: 'Dark Vather', score: 70},
    {id: 8, name: 'Elon Musk', score: 80},
    {id: 9, name: 'Julio Cesar', score: 90},
  ],
};

export const entitySlice = createSlice({
  name: 'entity',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // searchEntities : (state, action) => {
    //   // state.entities
    // },searchEntity : (state, action) => {
    // },
    createEntity: (state, {payload}) => {
      state.entities.push(payload);
    },
    updateEntity: (state, {payload}) => {
      const {id, name, score} = payload;
      const existingEntity = state.entities.find((entity) => entity.id === id);
      if (existingEntity) {
        existingEntity.name = `${name} edited`;
        existingEntity.score = score;
      }
    },
    deleteEntity: (state, {payload}: {payload: number}) => {
      const existingEntity = state.entities.find(
        (entity) => entity.id === payload,
      );
      if (existingEntity) {
        state.entities = state.entities.filter(
          (entity) => entity.id !== payload,
        );
      }
    },
  },
});

export const {createEntity, updateEntity, deleteEntity} = entitySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.entity.entities;

export default entitySlice.reducer;
