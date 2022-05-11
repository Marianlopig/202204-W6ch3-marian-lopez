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
  },
});

export const { addNumbers: addNumbersActionCreator } = phoneSlice.actions;
export default phoneSlice.reducer;
