import React from 'react'
import ApplicantsTable from './ApplicantsTable'
import Navbar from '../Navbar'

const Applicants = () => {
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