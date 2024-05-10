import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendors: null,
  isOpen: false,
  isEdit: false,
  editableVendor: null,
  deletePopup: false,
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
      state.editableVendor = action.payload;
    },
    setDeletePopup(state, action) {
      state.deletePopup = action.payload;
    },
  },
});

export const {
  setVendors,
  setHandleModal,
  setIsEdit,
  setEditableVendor,
  setDeletePopup,
} = vendorSlice.actions;
export default vendorSlice.reducer;
