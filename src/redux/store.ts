import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './slices/restaurantSlice'
import retailReducer from './slices/retailSlice'
import hotelReducer from './slices/hotelSlice'

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    retail: retailReducer,
    hotel: hotelReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
