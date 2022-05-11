import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    calling: false,
    numbers: [],
  },
  reducers: {
    addNumbers: (phoneState, action) => ({
      ...phoneState,
      numbers: [...phoneState.numbers, action.payload],
    }),

    deleteNumbers: (phoneState, action) => ({
      ...phoneState,
      numbers: [...phoneState.numbers].slice(0, phoneState.numbers.length - 1),
    }),
  },
});

export const {
  addNumbers: addNumbersActionCreator,
  deleteNumbers: deleteNumbersActionCreator,
} = phoneSlice.actions;
export default phoneSlice.reducer;
