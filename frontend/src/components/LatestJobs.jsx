import React from 'react'
import LatestJobCard from './LatestJobCard'

const LatestJobs = () => {
  // Generate distinct keys to force re-render if needed (though index is fine for static)
  const randomJobs = [1, 2, 3, 4, 5, 6];

  return (
    // Added bg-gray-50/50 to make the section distinct
    <div className='bg-gray-50/50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 tracking-tight'>
            Latest <span className='text-[#6A38C2]'>Job Openings</span>
          </h1>
          <p className='mt-4 text-gray-500 text-lg'>Top positions picked for you</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {randomJobs.map((item, index) => (
            <LatestJobCard key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestJobs