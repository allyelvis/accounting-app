import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RestaurantState {
  // Define your state here
}

const initialState: RestaurantState = {
  // Initialize your state here
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    // Define your reducers here
  },
})

export const { /* export your actions here */ } = restaurantSlice.actions
export default restaurantSlice.reducer
