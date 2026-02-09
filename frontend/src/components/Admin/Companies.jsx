import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '../../hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompany } from '../../redux/companySlice'

const Companies = () => {
  useGetAllCompanies()
  const [input,setInput] = useState("");  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchCompany(input))
  },[input])
  
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
          <button onClick={() => navigate("/admin/companies/create-company")} className="bg-black text-white px-4 py-2 rounded-md font-medium">New Company</button>
        </div>
        <CompaniesTable input={input}/>
      </div>
    </div>
  )
}

export default Companies