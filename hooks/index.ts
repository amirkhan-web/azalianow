import { AppDispatch } from './../redux/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<any> = useSelector