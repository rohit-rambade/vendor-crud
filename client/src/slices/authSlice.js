import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoginData(state, action) {
      state.userData = action.payload;
    },
  },
});
