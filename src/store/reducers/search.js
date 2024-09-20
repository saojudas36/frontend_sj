import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, { payload }) => payload,
    clearSearch: () => initialState,
  },
});

export const { updateSearch, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
