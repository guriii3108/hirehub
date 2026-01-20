import React from 'react'
import { Link } from 'react-router-dom'
import ProfileMenu from './ProfileMenu'

const Navbar = () => {
  const user = true; // Temporary: simulate logged-in state to show avatar

  return (
    <nav className='sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20 relative'>

          {/* Left: Logo */}
          <div className='flex shrink-0 items-center cursor-pointer'>
            <Link to='/' className='text-2xl font-bold tracking-tighter text-black'>
              HireHub<span className='text-gray-400'>.</span>
            </Link>
          </div>

          {/* Center: Navigation (Absolute centered for perfect alignment) */}
          <div className='hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-10 items-center'>
            {['Home', 'Jobs', 'Browse'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className='text-sm font-medium text-gray-500 hover:text-black transition-colors duration-200'
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: Auth / User Menu */}
          <div className='flex items-center gap-4'>
            {user ? (
              <ProfileMenu />
            ) : (
              <>
                <Link to='/login' className='hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200'>
                  Log in
                </Link>
                <Link to='/signup' className='bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-all duration-200 shadow-sm'>
                  Sign up
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar