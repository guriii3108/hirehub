import React from 'react'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='bg-white py-20 md:py-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>

        <div className='mb-8 flex justify-center'>
          <span className='px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-600 shadow-sm'>
            No. 1 Job Hunt Website
          </span>
        </div>

        <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6'>
          Search, Apply & <br className='hidden md:block' /> Get Your <span className='text-gray-500'>Dream Job</span>
        </h1>

        <p className='text-lg text-gray-500 max-w-2xl mx-auto mb-10'>
          Discover thousands of job opportunities with all the information you need. It's your future.
        </p>

        <div className='flex w-full max-w-2xl mx-auto shadow-xl border border-gray-100 rounded-full items-center bg-white overflow-hidden p-2 focus-within:ring-2 focus-within:ring-black/5 transition-all duration-300'>
          <input
            type="text"
            placeholder='Search for jobs, companies, or keywords...'
            className='grow outline-none border-none px-6 py-3 text-gray-700 placeholder:text-gray-400 text-lg w-full'
          />
          <button className='bg-black text-white p-4 rounded-full hover:bg-zinc-800 transition-transform active:scale-95 duration-200 shrink-0'>
            <Search className='h-6 w-6' />
          </button>
        </div>

      </div>
    </div>
  )
}

export default HeroSection