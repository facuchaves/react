import {configureStore} from '@reduxjs/toolkit';
import entitiesReducer from './features/entity/entitySlice';

export const store = configureStore({
  reducer: {
    entity: entitiesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type EntityRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type EntityDispatch = typeof store.dispatch;
/**
 * 
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
 */
