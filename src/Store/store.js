import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../Reducers/favoritesSlice'

export const store = configureStore({

  favorites: favoritesReducer,
})