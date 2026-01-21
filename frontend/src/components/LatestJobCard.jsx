import React from 'react'
import { Badge, MapPin, Building2, Bookmark } from 'lucide-react'

const LatestJobCard = () => {
  return (
    <div className='bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden'>

      {/* Optional: subtle gradient or accent at top */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-[#6A38C2] transition-colors'></div>

      <div className='flex items-start justify-between mb-6'>
        <div className='flex items-center gap-4'>
          <div className='w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-50 group-hover:bg-white group-hover:border-[#6A38C2]/20 transition-all'>
            <Building2 className='w-7 h-7 text-gray-400 group-hover:text-[#6A38C2] transition-colors' />
          </div>
          <div>
            <h2 className='font-bold text-lg text-gray-900 leading-tight'>Google</h2>
            <p className='text-sm text-gray-500 flex items-center gap-1 mt-1'>
              <MapPin className='w-3 h-3' /> India
            </p>
          </div>
        </div>
        <button className='p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-[#6A38C2] transition-colors'>
          <Bookmark className='w-5 h-5' />
        </button>
      </div>

      <div className='mb-6'>
        <h1 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6A38C2] transition-colors'>
          Senior Frontend Engineer
        </h1>
        <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
          Join our team to build the next generation of web applications using React and modern web technologies.
        </p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <span className='px-4 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors cursor-default'>
          12 Positions
        </span>
        <span className='px-4 py-1.5 rounded-full text-xs font-bold text-[#F83002] bg-[#F83002]/10 hover:bg-[#F83002]/20 transition-colors cursor-default'>
          Part Time
        </span>
        <span className='px-4 py-1.5 rounded-full text-xs font-bold text-[#7209b7] bg-[#7209b7]/10 hover:bg-[#7209b7]/20 transition-colors cursor-default'>
          24 LPA
        </span>
      </div>
    </div>
  )
}

export default LatestJobCard