import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reportReducer from '../slices/reportSlice';

export const rootReducer = combineReducers({
  report: reportReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
