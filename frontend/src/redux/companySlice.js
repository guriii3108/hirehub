import { createSlice } from "@reduxjs/toolkit";

const companySlice =createSlice({
  name:"company",
  initialState:{
    companies:[], //for all companies
    singleCompany:null, //for single company
  },
  reducers:{
    //actions here
      setSingleCompany:(state,action)=>{ //for single company
      state.singleCompany = action.payload;
    },
    setAllCompanies:(state,action)=>{ //for all companies
        state.companies = action.payload; 
    } 
  }
})

export const {setSingleCompany,setAllCompanies} =companySlice.actions;
export default companySlice.reducer 