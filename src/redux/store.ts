import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import loginReducer from "@/redux/features/loginState.slice"
import authReducer from '@/redux/features/user.slice'
export const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      login:loginReducer,
      userLogin: authReducer
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch