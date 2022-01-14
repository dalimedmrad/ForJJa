import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice/categorySlice'
import filmSlice from './filmSlice/filmSlice'
import userSlice from './userslice/userSlice'

export const store = configureStore({
  reducer: {
      user:userSlice,
      category:categorySlice,
      film:filmSlice
  },
})