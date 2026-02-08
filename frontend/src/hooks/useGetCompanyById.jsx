import { useEffect } from "react";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../redux/companySlice";
import { showError } from "../utils/toast";

const useGetCompanyById = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(!id) return;
    const fetchSingleCompany = async () => {
      try {
        const response = await axios.get(`${COMPANY_API_ENDPOINT}/get-company/${id}`, {
          withCredentials: true,
        });
        if (response.data.success) {
          dispatch(setSingleCompany(response.data.company))
        }
      } catch (error) {
        showError(error.response.data.message);
      }
    }
    fetchSingleCompany();
  }, [id, dispatch])
}

export default useGetCompanyById;