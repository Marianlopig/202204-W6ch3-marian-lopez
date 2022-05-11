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

    deleteNumbers: (phoneState) => ({
      ...phoneState,
      numbers: [...phoneState.numbers].slice(0, phoneState.numbers.length - 1),
    }),

    call: (phoneState) => ({
      ...phoneState,
      calling: true,
    }),
    hang: (phoneState) => ({
      ...phoneState,
      calling: false,
      numbers: [],
    }),
  },
});

export const {
  addNumbers: addNumbersActionCreator,
  deleteNumbers: deleteNumbersActionCreator,
  call: callActionCreator,
  hang: hangActionCreator,
} = phoneSlice.actions;
export default phoneSlice.reducer;
