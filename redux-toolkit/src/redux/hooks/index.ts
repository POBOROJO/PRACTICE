// the need for hooks:
// 1. 1 hook hoga cheezo ko read karne ke liye
// 2. dusra hook hoga dispatch karne ke liye

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // when we dispatch an action/events
export const useAppSelector = useSelector.withTypes<RootState>(); // jab value ko read karna hota hain
