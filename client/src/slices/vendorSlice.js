import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendors: null,
};

export const vendorSlice = createSlice({
  name: "vendor",
  initialState: initialState,
  reducers: {
    setVendors(state, action) {
      state.vendors = action.payload;
      console.log(state.vendors);
    },
  },
});

export const { setVendors } = vendorSlice.actions;
export default vendorSlice.reducer;
