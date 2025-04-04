import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'


import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'

// config for how to store in local storage
const persistConfig = {
  key: 'root',
  storage,
}

// combine reducers
const reducers = combineReducers({
  cart: cartSlice,
})

// create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers)


// create a global store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // if not json data
    }),
})

export const persistor = persistStore(store) // create a persistor
export default store // export the store
