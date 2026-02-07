import React, { useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { COMPANY_API_ENDPOINT } from '../../utils/constant';
import { showError, showSuccess } from '../../utils/toast';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '../../redux/companySlice';

const CreateCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const registerNewCompany = async () => {
    try {
      const response = await axios.post(`${COMPANY_API_ENDPOINT}/register`, { companyName: companyName }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      if(response?.data?.success){
        showSuccess(response.data.message);
        dispatch(setSingleCompany(response.data.company));
        const companyId = response.data.company._id;
        navigate(`/admin/companies/${companyId}`); //redirecting to the company details page
      }
      console.log(response);
    } catch (error) {
      showError(error.response.data.message);
    }
  }
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto'>
        <div className='my-10'>
          <h1 className='font-bold text-2xl'>Your Company Name</h1>
          <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
        </div>

        <label>Company Name</label>
        <input
          type="text"
          className='my-2 w-full p-2 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-100'
          placeholder="JobHunt, Microsoft etc."
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className='flex items-center gap-2 my-10'>
          <button onClick={() => navigate("/admin/companies")} className='border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50'>Cancel</button>
          <button onClick={registerNewCompany} className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default CreateCompany