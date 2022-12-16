import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({ userReducer });
const persistConfig = { key: "root", storage, whitelist: ["userReducer"] };
const persistedReducer = persistReducer(persistConfig, reducers);

//
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
