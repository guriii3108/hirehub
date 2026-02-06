import React from 'react'
import { Bookmark } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate();
  return (
    <div className='p-6 rounded-xl shadow-sm bg-white border border-gray-100 cursor-pointer hover:shadow-md hover:border-gray-200 transition-all duration-300'>

      {/* Top Section: Company Icon & Meta */}
      <div className='flex items-start justify-between mb-4'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100'>
            <img src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" alt="Google" className='w-8 h-8 object-contain' />
          </div>
          <div>
            <h2 className='font-semibold text-base text-gray-900'>{job?.company?.name}</h2>
            <p className='text-xs text-gray-500'>Mountain View, CA</p>
          </div>
        </div>
        <p className='text-xs text-gray-400 font-medium'>2d ago</p>
      </div>

      {/* Role Title */}
      <div className='mb-3'>
        <h1 className='font-bold text-lg text-gray-800 leading-tight'>{job?.title}</h1>
        <p className='text-sm text-gray-500 mt-2 line-clamp-2'>
          {job?.description}
        </p>
      </div>

      {/* Tags - Gentle & Minimalist */}
      <div className='flex items-center gap-2 mb-6'>
        <span className='px-3 py-1 rounded-full text-[10px] font-semibold text-gray-600 bg-gray-50 border border-gray-100 capitalize'>
          {job?.position} Pos
        </span>
        <span className='px-3 py-1 rounded-full text-[10px] font-semibold text-gray-600 bg-gray-50 border border-gray-100 capitalize'>
          {job?.jobType}
        </span>
        <span className='px-3 py-1 rounded-full text-[10px] font-semibold text-gray-600 bg-gray-50 border border-gray-100 capitalize'>
          {job?.salary}
        </span>
      </div>

      {/* Footer Actions */}
      <div className='flex items-center justify-between border-t border-gray-50 pt-4 mt-auto'>
        <button onClick={() => navigate(`/description/${job._id}`)} className='px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50'>
          Details
        </button>
        <button className='bg-[#6A38C2] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#5b30a6] transition-colors shadow-sm'>
          Save For Later
        </button>
      </div>

    </div>
  )
}

export default Job