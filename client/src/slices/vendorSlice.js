import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendors: null,
  isOpen: false,
  isEdit: false,
  editableVendor: null,
};

export const vendorSlice = createSlice({
  name: "vendor",
  initialState: initialState,
  reducers: {
    setVendors(state, action) {
      state.vendors = action.payload;
    },
    setHandleModal(state, action) {
      state.isOpen = action.payload;
    },
    setIsEdit(state, action) {
      state.isEdit = action.payload;
    },
    setEditableVendor(state, action) {
      console.log("in redux i got", action.payload);
      state.editableVendor = action.payload;
    },
  },
});

export const { setVendors, setHandleModal, setIsEdit, setEditableVendor } =
  vendorSlice.actions;
export default vendorSlice.reducer;
