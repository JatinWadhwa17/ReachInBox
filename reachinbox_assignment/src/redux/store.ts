"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import viewReducer from './loginSlice'

const rootreducer=combineReducers({
  login:viewReducer
})
const store = configureStore({
 reducer:rootreducer
});

// export const persistor=persistStore(store);

export default store;
