import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HotelState {
  // Define your state here
}

const initialState: HotelState = {
  // Initialize your state here
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const {
  /* export your actions here */
} = hotelSlice.actions;
export default hotelSlice.reducer;
