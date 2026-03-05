import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  applicants: [],
}

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setApplicants: (state, action) => {
      state.applicants = action.payload;
    },
  },
});

export default applicationSlice.reducer;
export const {setApplicants} = applicationSlice.actions;
