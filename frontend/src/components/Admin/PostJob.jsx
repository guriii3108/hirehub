import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Briefcase, MapPin, DollarSign, Clock, Users, FileText, CheckCircle2, Building2, Building } from 'lucide-react'
import { showError, showSuccess } from '../../utils/toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { JOB_API_ENDPOINT } from '../../utils/constant';

const PostJob = () => {
  const { companies } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    position: 0,
    salary: "",
    jobType: "",
    location: "",
    experience: "",
    companyId: "",
  });

  const changeEventHandler = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_ENDPOINT}/post-job`,input,{
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true,
      })
      if(res?.data?.success){
        showSuccess(res?.data?.message)
        navigate("/admin/jobs")
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong")
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className='flex-1 max-w-4xl w-full mx-auto my-10 px-4'>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <h1 className='text-3xl font-bold text-gray-900'>Post New Job</h1>
            <p className="text-gray-500 mt-2">Fill in the details below to create a new job posting.</p>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
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
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
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
                    type="number"
                    placeholder='No. of positions'
                    className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                    name="position"
                    value={input.position}
                    onChange={changeEventHandler}
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
                    name="location"
                    value={input.location}
                    onChange={changeEventHandler}
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
                    name="salary"
                    value={input.salary}
                    onChange={changeEventHandler}
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
                    name="jobType"
                    value={input.jobType}
                    onChange={changeEventHandler}
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
                    name="experience"
                    value={input.experience}
                    onChange={changeEventHandler}
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
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
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
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                />
              </div>
            </div>

            {
              companies.length > 0 && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 mx-1">Company</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      required
                      className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                      name="companyId"
                      value={input.companyId}
                      onChange={changeEventHandler}
                    >
                      <option value="" >Select Company</option>
                      {
                        companies.map((company) => (
                          <option key={company._id} value={company._id}>{company.name}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              )
            }

            {
              loading ?(  
                <div className='flex items-center justify-center'>
                  <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-black'></div>
                </div>
              ):(
                <button
              type='submit'
              className='w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-zinc-800 transition-all duration-200 shadow-sm mt-2'
            >
              Post Job
            </button>
              )
            }
            {
              companies.length === 0 && (
                <p className='text-red-500 text-center mt-2'>Please register a company first</p>
              )
            }
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostJob