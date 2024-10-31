import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './slices/restaurantSlice'
import retailReducer from './slices/retailSlice'
import hotelReducer from './slices/hotelSlice'
import inventoryReducer from './slices/inventorySlice'

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    retail: retailReducer,
    hotel: hotelReducer,
    inventory: inventoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
