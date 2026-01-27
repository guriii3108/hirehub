import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Job from '../components/Job'

const randomJobs = [1, 2, 3];

const Browse = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30'>
      <Navbar />

      {/* Hero Section with Search Results */}
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Header Section */}
        <div className='mb-12 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6'>
            <div className='w-2 h-2 bg-purple-500 rounded-full animate-pulse'></div>
            <span className='text-sm font-medium text-purple-700'>Live Results</span>
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>
            Search Results
          </h1>

          <p className='text-lg text-gray-600 mb-6'>
            Found <span className='font-bold text-purple-600'>{randomJobs.length}</span> opportunities matching your criteria
          </p>

          {/* Stats Bar */}
          <div className='flex items-center justify-center gap-8 flex-wrap'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              <span className='text-sm text-gray-600'>{randomJobs.length} Active</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
              <span className='text-sm text-gray-600'>Recently Posted</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-purple-500 rounded-full'></div>
              <span className='text-sm text-gray-600'>Top Companies</span>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in'>
          {
            randomJobs.map((job, index) => (
              <div
                key={index}
                className='transform transition-all duration-300 hover:scale-[1.02]'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Job />
              </div>
            ))
          }
        </div>

        {/* Empty State (if needed in future) */}
        {randomJobs.length === 0 && (
          <div className='text-center py-20'>
            <div className='w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
              <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>No jobs found</h3>
            <p className='text-gray-600'>Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Browse