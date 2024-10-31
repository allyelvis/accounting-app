import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InventoryState {
  // Define your state here
}

const initialState: InventoryState = {
  // Initialize your state here
}

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    // Define your reducers here
  },
})

export const { /* export your actions here */ } = inventorySlice.actions
export default inventorySlice.reducer
