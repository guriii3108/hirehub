import React from 'react'
import Navbar from '../Navbar'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <input
            className="w-fit border border-gray-200 pl-3 py-2 rounded-md"
            placeholder="Filter by name"
          />
          <button onClick={() => navigate("/admin/companies/create-company")} className="bg-black text-white px-4 py-2 rounded-md font-medium">New Company</button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  )
}

export default Companies