import React, { useEffect, useState } from 'react'
import ApplicantsTable from './ApplicantsTable'
import Navbar from '../Navbar'
import { showError, showSuccess } from '../../utils/toast'
import axios from 'axios'
import { APPLICATION_API_ENDPOINT } from '../../utils/constant'
import { useParams } from 'react-router-dom'

const Applicants = () => {
  const { jobId } = useParams();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${APPLICATION_API_ENDPOINT}/applicants/${jobId}`, 
          { withCredentials: true }
        )
        if (response?.data?.success) {
          showSuccess(response?.data?.message || "Applicants retrieved successfully")
          //store in redux
          console.log(response?.data?.job?.applications)
        }
      } catch (error) {
        showError(error?.response?.data?.message || "Failed to retrieve applicants")
      }
      finally {
        setLoading(false)
      }
    }
    fetchApplicants()
  }, [])
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Navbar />
      <div className='flex-1 max-w-7xl w-full mx-auto my-10 px-4'>
        <div className="mb-6 flex items-center justify-between">
          <h1 className='text-2xl font-bold text-gray-900'>Applicants (3)</h1>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <ApplicantsTable />
        </div>
      </div>
    </div>
  )
}

export default Applicants