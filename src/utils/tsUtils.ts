import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/store";


export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;