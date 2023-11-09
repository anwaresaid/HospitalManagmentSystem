import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: SearchState;
};

type SearchState = {
  search: string;
};

const initialState = {
  value: {
    search: "",
  } as SearchState,
} as InitialState;

export const search = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      return {
        value: {
          search: action.payload,
        },
      };
    },
  },
});

export const { setSearch } = search.actions;
export default search.reducer;
