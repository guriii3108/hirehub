//we created custom hook for getting all jobs...bcz we want to use it in multiple components

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { JOB_API_ENDPOINT } from "../utils/constant";
import { setAllJobs } from "../redux/jobSlice";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllJobs =async()=>{
      try{
        const response = await axios.get(`${JOB_API_ENDPOINT}/get-all-jobs`,{
          withCredentials:true,
        });
        if(response.data.success){
          dispatch(setAllJobs(response.data.jobs))
        }
      }catch(error){
        console.log(error);
      }
    }
    getAllJobs();
  }, [])
}

export default useGetAllJobs