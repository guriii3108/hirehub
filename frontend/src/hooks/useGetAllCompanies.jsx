import axios from 'axios';
import { useDispatch } from 'react-redux';
import { COMPANY_API_ENDPOINT } from '../utils/constant';
import { setAllCompanies } from '../redux/companySlice';
import { useEffect } from 'react';


const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCompanies =async()=>{
      try{
        const response = await axios.get(`${COMPANY_API_ENDPOINT}/get-company`,{
          withCredentials:true,
        });
        if(response.data.success){
          dispatch(setAllCompanies(response.data.companies))
        }
      }catch(error){
        console.log(error);
      }
    }
    getAllCompanies();
  }, [])
}

export default useGetAllCompanies