import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contactSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contact: contactSlice,
    filter: filterSlice,
  },
});
