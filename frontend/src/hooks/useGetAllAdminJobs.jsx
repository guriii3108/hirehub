import axios from 'axios';
import { useDispatch } from 'react-redux';
import { JOB_API_ENDPOINT } from '../utils/constants';
import { setAllAdminJobs } from '../redux/jobSlice';
import { useEffect } from 'react';

const useGetAllAdminJobs = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllJobs =async()=>{
      try{
        const response = await axios.get(`${JOB_API_ENDPOINT}/get-admin-jobs`,{
          withCredentials:true,
        });
        if(response.data.success){
          dispatch(setAllAdminJobs(response.data.jobs));
        }
      }catch(error){
        console.log(error);
      }
    }
    getAllJobs();
  }, [])
}

export default useGetAllAdminJobs