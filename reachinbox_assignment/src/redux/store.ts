"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getAllMailsReducer from './loginSlice'

const rootreducer=combineReducers({
  viewall:getAllMailsReducer
})
const store = configureStore({
 reducer:rootreducer
});

// export const persistor=persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
