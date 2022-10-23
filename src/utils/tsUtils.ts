import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
