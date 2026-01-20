import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { ChevronDown, Check } from 'lucide-react'

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeEventHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const changeFileHandler = (e) => {
    setData({ ...data, file: e.target.files?.[0] });
  }

  const selectRole = (role) => {
    setData({ ...data, role });
    setIsDropdownOpen(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      role: "",
      file: ""
    });
    
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto pt-10 pb-10'>
        <div className='bg-white p-8 rounded-xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-gray-100 max-w-md w-full my-6'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 tracking-tight'>Sign Up</h1>
            <p className='text-sm text-gray-500 mt-2'>Create an account to start your journey</p>
          </div>

          <form onSubmit={submitHandler} className='flex flex-col gap-5'>
            <div className='space-y-1.5'>
              <label className='text-sm font-medium text-gray-700'>Full Name</label>
              <input
                type="text"
                value={data.name}
                name="name"
                onChange={changeEventHandler}
                placeholder="John Doe"
                className='w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm placeholder:text-gray-400'
              />
            </div>

            <div className='space-y-1.5'>
              <label className='text-sm font-medium text-gray-700'>Email Address</label>
              <input
                type="email"
                value={data.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="john@example.com"
                className='w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm placeholder:text-gray-400'
              />
            </div>
            <div className='space-y-1.5'>
              <label className='text-sm font-medium text-gray-700'>Phone Number</label>
              <input
                type="text"
                value={data.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="1234567890"
                className='w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm placeholder:text-gray-400'
              />
            </div>

            <div className='space-y-1.5'>
              <label className='text-sm font-medium text-gray-700'>Password</label>
              <input
                type="password"
                value={data.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="••••••••"
                className='w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm placeholder:text-gray-400'
              />
            </div>
            <div className='space-y-1.5'>
              <label className='text-sm font-medium text-gray-700'>Profile Picture</label>
              <input
                className='w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-black hover:file:bg-gray-200'
                accept='image/*'
                type="file"
                name="file"
                onChange={changeFileHandler}
              />
            </div>

            {/* Custom Role Selection Dropdown */}
            <div className='relative space-y-1.5'>
              <label className='text-sm font-medium text-gray-700'>Account Type</label>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-2.5 border rounded-lg bg-white text-sm transition-all text-left ${isDropdownOpen ? 'border-black ring-2 ring-black/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <span className={data.role ? 'text-gray-900' : 'text-gray-400'}>
                  {data.role || "Select your role"}
                </span>
                <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className='absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg py-1 animate-in fade-in zoom-in-95 duration-100'>
                  {['Job Seeker', 'Employer'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => selectRole(option)}
                      className='w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left'
                    >
                      <span>{option}</span>
                      {data.role === option && <Check size={16} className="text-black" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type='submit'
              className='w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-zinc-800 transition-all duration-200 shadow-sm mt-2'
            >
              Sign Up
            </button>

            <p className='text-center text-sm text-gray-600 mt-2'>
              Already have an account?{' '}
              <Link to="/login" className='text-black font-semibold hover:underline'>
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup