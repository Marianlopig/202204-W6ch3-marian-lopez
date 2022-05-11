import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "../features/phone/phoneSlice";

const store = configureStore({
  reducer: {
    numbers: phoneSlice,
  },
});

export default store;
