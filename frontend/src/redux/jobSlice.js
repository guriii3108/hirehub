import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name:"job",
  initialState:{
    allJobs:[], //we can put null also but we use array because we can store multiple jobs
    singleJob:null, //for single job

    //for admin
    allAdminJobs:[],
  },
  reducers:{
    //actions...
    setAllJobs:(state,action)=>{ //for all jobs
      state.allJobs = action.payload;
    },
    setSingleJob:(state,action)=>{ //for single job
      state.singleJob = action.payload;
    },
    setAllAdminJobs:(state,action)=>{
      state.allAdminJobs = action.payload;
    }
  }
})

export const {setAllJobs,setSingleJob} = jobSlice.actions;
export default jobSlice.reducer;

