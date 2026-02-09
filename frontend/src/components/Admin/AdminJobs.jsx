import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AdminJobsTable from './AdminJobsTable';

const AdminJobs = () => {
  const [input,setInput] = useState("");  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <input
            className="w-fit border border-gray-200 pl-3 py-2 rounded-md"
            placeholder="Filter by name"
            onChange={(e)=>setInput(e.target.value)}
          />
          <button onClick={() => navigate("/admin/companies/create-company")} className="bg-black text-white px-4 py-2 rounded-md font-medium">Post New Job</button>
        </div>
        {/* <AdminJobsTable input={input}/> */}
      </div>
      <Footer />
    </div>
  )
}

export default AdminJobs