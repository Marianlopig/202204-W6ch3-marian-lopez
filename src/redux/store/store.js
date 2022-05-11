import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "../features/phone/phoneSlice";

const store = configureStore({
  reducer: {
    phone: phoneSlice,
  },
});

export default store;
