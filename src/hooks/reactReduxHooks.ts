import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {EntityRootState, EntityDispatch} from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useEntityDispatch: () => EntityDispatch = useDispatch;
export const useEntitySelector: TypedUseSelectorHook<EntityRootState> =
  useSelector;
