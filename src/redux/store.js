import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slides/counterSlice'

export const store = configureStore({
  reducer: {
    couter:counterSlice
  },
})

