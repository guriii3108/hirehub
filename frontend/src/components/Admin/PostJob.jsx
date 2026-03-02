import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Briefcase, MapPin, DollarSign, Clock, Users, FileText, CheckCircle2 } from 'lucide-react'

const PostJob = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className='flex-1 max-w-4xl w-full mx-auto my-10 px-4'>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <h1 className='text-3xl font-bold text-gray-900'>Post New Job</h1>
            <p className="text-gray-500 mt-2">Fill in the details below to create a new job posting.</p>
          </div>

          <form className='flex flex-col gap-6'>
            {/* Job Title */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 mx-1">Job Title</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder='e.g. Senior Frontend Developer'
                  className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Position */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 mx-1">Position / Role</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder='e.g. SDE II'
                    className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                  />
                </div>
              </div>

              {/* Job Location */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 mx-1">Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder='e.g. Remote, Bangalore, CA'
                    className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                  />
                </div>
              </div>

              {/* Job Salary */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 mx-1">Salary Range</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder='e.g. $100k - $120k or 15-20 LPA'
                    className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                  />
                </div>
              </div>

              {/* Job Type */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 mx-1">Job Type</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder='e.g. Full-Time, Part-Time, Contract'
                    className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                  />
                </div>
              </div>

              {/* Job Experience */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 mx-1">Experience Required</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder='e.g. 2+ Years'
                    className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                  />
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm font-medium text-gray-700 mx-1">Job Description</label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  rows={4}
                  placeholder='Describe the responsibilities and context of the role...'
                  className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none'
                />
              </div>
            </div>

            {/* Job Requirements */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 mx-1">Job Requirements</label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <CheckCircle2 className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  rows={3}
                  placeholder='List the required skills, qualifications, and nice-to-haves...'
                  className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none'
                />
              </div>
            </div>

            <button
              type='submit'
              className='mt-4 bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all flex justify-center items-center gap-2'
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostJob