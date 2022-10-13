import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    isView: false,
  },
  reducers: {
    clickView(state, actions) {
      return {
        state,
        isView: actions.payload,
      };
    },
  },
});

//**for dispatch
export const { clickView } = viewSlice.actions;
//**for store index
export default viewSlice.reducer;
