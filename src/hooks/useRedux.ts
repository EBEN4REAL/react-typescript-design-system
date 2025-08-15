import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

/** Typed version of useDispatch for thunk / async actions */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Typed version of useSelector for state slices */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
