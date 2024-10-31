import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RetailState {
  // Define your state here
}

const initialState: RetailState = {
  // Initialize your state here
};

export const retailSlice = createSlice({
  name: "retail",
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const {
  /* export your actions here */
} = retailSlice.actions;
export default retailSlice.reducer;
