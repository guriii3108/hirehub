import React, { useState } from 'react'
import { X, Loader2, Upload } from 'lucide-react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { USER_API_ENDPOINT } from '../utils/constant';
import { showError, showSuccess } from '../utils/toast';

const UpdateProfileDialouge = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);

  // Mock user data from what would be available
  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.bio,
    skills: user?.skills?.map((skill) => skill),
    file: user?.profile?.resume
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const fileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file: file });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Dispatch update action here
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file){
      formData.append("file", input.file);
    }
    try {
      const response = await axios.put(`${USER_API_ENDPOINT}/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if(response.data.success){
        dispatch(setUser(response.data.user));
        showSuccess(response?.data?.message);
      }
    } catch (error) {
        showError(error?.response?.data?.message || "Something went wrong");
    }
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2000);
  }

  if (!open) return null;

  return (
    <div className='fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm transition-opacity duration-300'>
      <div className='bg-white rounded-2xl w-full max-w-lg mx-4 shadow-2xl transform transition-all duration-300 scale-100 flex flex-col max-h-[90vh]'>

        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10 rounded-t-2xl'>
          <h2 className='text-xl font-bold text-gray-900'>Update Profile</h2>
          <button
            onClick={() => setOpen(false)}
            className='p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Form Content */}
        <div className='p-6 overflow-y-auto custom-scrollbar'>
          <form onSubmit={submitHandler} className='space-y-4'>

            {/* Full Name */}
            <div className='space-y-1.5'>
              <label htmlFor="fullName" className='text-sm font-medium text-gray-700'>Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={input.fullName}
                onChange={changeEventHandler}
                className='w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50/50'
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className='space-y-1.5'>
              <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                className='w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50/50'
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Number */}
            <div className='space-y-1.5'>
              <label htmlFor="phoneNumber" className='text-sm font-medium text-gray-700'>Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                className='w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50/50'
                placeholder="+1 234 567 890"
              />
            </div>

            {/* Bio */}
            <div className='space-y-1.5'>
              <label htmlFor="bio" className='text-sm font-medium text-gray-700'>Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={input.bio}
                onChange={changeEventHandler}
                rows="3"
                className='w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50/50 resize-none'
                placeholder="Tell us about yourself..."
              />
            </div>

            {/* Skills */}
            <div className='space-y-1.5'>
              <label htmlFor="skills" className='text-sm font-medium text-gray-700'>Skills <span className='text-xs text-gray-400 font-normal'>(Comma separated)</span></label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={input.skills}
                onChange={changeEventHandler}
                className='w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50/50'
                placeholder="React, Node.js, Tailwind..."
              />
            </div>

            {/* Resume Upload */}
            <div className='space-y-1.5'>
              <label htmlFor="file" className='text-sm font-medium text-gray-700'>Resume</label>
              <div className='relative'>
                <input
                  type="file"
                  id="file"
                  accept="application/pdf"
                  onChange={fileHandler}
                  className='w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer bg-gray-50/50'
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className='p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl flex justify-end gap-3'>
          <button
            onClick={() => setOpen(false)}
            className='px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all'
          >
            Cancel
          </button>
          <button
            onClick={submitHandler}
            disabled={loading}
            className='px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-black hover:bg-gray-900 transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2'
          >
            {loading ? <> <Loader2 className='w-4 h-4 animate-spin' /> Updating... </> : 'Save Changes'}
          </button>
        </div>

      </div>
    </div>
  )
}

export default UpdateProfileDialouge