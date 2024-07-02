import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const filterSlice = slice.reducer;
export const { setFilter } = slice.actions;
