import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import loginReducer from "@/redux/features/loginState.slice"
import authReducer from '@/redux/features/user.slice'
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { persistStore } from 'redux-persist';
const persistConfig = {
  key: "Auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      login:loginReducer,
      userLogin: persistedAuthReducer
    },

    middleware: (getDefaultMiddlewares) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);