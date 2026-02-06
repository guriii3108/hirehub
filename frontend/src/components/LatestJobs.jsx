import React from 'react'
import LatestJobCard from './LatestJobCard'
import { useSelector } from 'react-redux'
import { Briefcase } from 'lucide-react'

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className='bg-gray-50/50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 tracking-tight'>
            Latest <span className='text-[#6A38C2]'>Job Openings</span>
          </h1>
          <p className='mt-4 text-gray-500 text-lg'>Top positions picked for you</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {allJobs.length > 0 ? allJobs.map((job) => (
            <LatestJobCard key={job._id} job={job} />
          )) : (
            <div className='col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-200 text-center'>
              <div className='p-4 bg-gray-50 rounded-full mb-4'>
                <Briefcase className='w-8 h-8 text-gray-400' />
              </div>
              <h3 className='text-xl font-bold text-gray-900'>No Job Openings Found</h3>
              <p className='text-gray-500 mt-2 max-w-sm mx-auto'>
                There are currently no active job listings. Please check back later for new opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LatestJobs