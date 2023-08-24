import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from '../Redux/Cart'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"

const rootReducers = combineReducers({
  name: cartReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
});