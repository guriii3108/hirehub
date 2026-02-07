import React, { useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Loader2 } from 'lucide-react';

const CompanyDetail = () => {
  const navigate = useNavigate();
  const loading = false; // placeholder for loading state
  const [input,setInput] =useState({
    name:"",
    description:"",
    website:"",
    location:"",
  })
  
  const changeEventHandler = (e)=>{
    setInput({
      ...input,[e.target.name]:e.target.value
    })
  }

  const changeFileHandler = (e)=>{
    const file = e.target.files[0];
    setInput({
      ...input,logo:file
    })
  }

const submitHandler = (e)=>{
  e.preventDefault();
  console.log(input);
}

  return (
    <div className="min-h-screen bg-gray-50/30">
      <Navbar />
      <div className='max-w-xl mx-auto my-10 px-4'>
        <form onSubmit={submitHandler} className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 space-y-8">

          {/* Header */}
          <div className='flex items-center gap-5'>
            <button
              type="button"
              onClick={() => navigate("/admin/companies")}
              className='p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors'
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className='font-bold text-2xl text-gray-900'>Company Setup</h1>
              <p className='text-sm text-gray-500 mt-1'>Update your company details and logo.</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className="space-y-2">
              <label className='text-sm font-medium text-gray-700' htmlFor="name">Company Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 focus:bg-white'
                placeholder="e.g. Google, Microsoft"
              />
            </div>

            <div className="space-y-2">
              <label className='text-sm font-medium text-gray-700' htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 focus:bg-white'
                placeholder="What does your company do?"
              />
            </div>

            <div className="space-y-2">
              <label className='text-sm font-medium text-gray-700' htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
                className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 focus:bg-white'
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <label className='text-sm font-medium text-gray-700' htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50 focus:bg-white'
                placeholder="Headquarters location"
              />
            </div>

            <div className='col-span-1 md:col-span-2 space-y-2'>
              <label className='text-sm font-medium text-gray-700' htmlFor="file">Company Logo</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-gray-500 transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                      <span>Upload a file</span>
                      <input id="file" name="file" type="file" accept="image/*" className="sr-only" 
                      onChange={changeFileHandler} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            {loading ? (
              <button disabled className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 py-3 rounded-lg font-medium cursor-not-allowed">
                <Loader2 className='w-4 h-4 animate-spin' /> Please wait
              </button>
            ) : (
              <button type='submit' className="w-full bg-black text-white hover:bg-gray-900 active:scale-[0.98] transition-all py-3 rounded-lg font-medium shadow-lg shadow-gray-200">
                Update Company Details
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default CompanyDetail