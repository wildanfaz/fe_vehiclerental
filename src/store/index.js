import { configureStore } from "@reduxjs/toolkit";
import Users from "./reducer/users";
import View from "./reducer/viewAll";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "user_vehiclerental",
  storage,
};

const reducer = combineReducers({
  users: Users,
  view: View,
});

const persistReducers = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistReducers,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
