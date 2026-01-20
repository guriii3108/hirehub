import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { User, LogOut, Settings, FileText } from 'lucide-react'

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Use dummy user data for now
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff"
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative' ref={menuRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 focus:outline-none transition-transform hover:scale-105 active:scale-95'
      >
        <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100 hover:ring-blue-200 transition-all'>
          <img
            src={user.avatar}
            alt={user.name}
            className='w-full h-full object-cover'
          />
        </div>
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className='absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-[0_4px_20px_-1px_rgba(0,0,0,0.1)] border border-gray-100 py-2 z-50 transform origin-top-right transition-all duration-200 ease-out animate-in fade-in slide-in-from-top-2'>
          <div className='px-4 py-3 border-b border-gray-50 mb-1'>
            <p className='text-sm font-semibold text-gray-800'>{user.name}</p>
            <p className='text-xs text-gray-500 truncate'>{user.email}</p>
          </div>

          <div className='py-1 space-y-0.5'>
            <Link
              to="/profile"
              className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors gap-3 mx-1 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              <User size={16} />
              View Profile
            </Link>
            <Link
              to="/applications"
              className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors gap-3 mx-1 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              <FileText size={16} />
              My Applications
            </Link>
            <Link
              to="/settings"
              className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors gap-3 mx-1 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              <Settings size={16} />
              Settings
            </Link>
          </div>

          <div className='border-t border-gray-50 mt-1 pt-1'>
            <button
              className='w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors gap-3 mx-1 rounded-md'
              onClick={() => {
                console.log("Logout Successfully");
                setIsOpen(false);
              }}
            >
              <LogOut size={16} />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
