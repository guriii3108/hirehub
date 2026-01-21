import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='border-t border-gray-100 bg-white py-20 mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>

          {/* Column 1: Brand */}
          <div className='mb-8 md:mb-0'>
            <h1 className='text-3xl font-bold text-gray-900 tracking-tighter mb-4'>
              HireHub<span className='text-[#6A38C2]'>.</span>
            </h1>
            <p className='text-gray-500 text-sm leading-relaxed'>
              Connecting talent with opportunities. Join thousands of professionals finding their dream jobs every day.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className='font-bold text-gray-900 mb-6'>Company</h3>
            <ul className='space-y-4 text-sm text-gray-500'>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>About Us</li>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>Careers</li>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>Blog</li>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>Press</li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className='font-bold text-gray-900 mb-6'>Resources</h3>
            <ul className='space-y-4 text-sm text-gray-500'>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>Help Center</li>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>Terms of Service</li>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>Privacy Policy</li>
              <li className='hover:text-[#6A38C2] cursor-pointer transition-colors'>Contact Support</li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className='font-bold text-gray-900 mb-6'>Follow Us</h3>
            <div className='flex gap-4'>
              <a href="#" className='p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-[#6A38C2] hover:text-white transition-all'>
                <Facebook className='w-5 h-5' />
              </a>
              <a href="#" className='p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-[#6A38C2] hover:text-white transition-all'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href="#" className='p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-[#6A38C2] hover:text-white transition-all'>
                <Linkedin className='w-5 h-5' />
              </a>
              <a href="#" className='p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-[#6A38C2] hover:text-white transition-all'>
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-400'>
            © {new Date().getFullYear()} HireHub. All rights reserved.
          </p>
          <div className='flex gap-8 text-sm text-gray-400'>
            <span className='hover:text-gray-600 cursor-pointer'>Privacy</span>
            <span className='hover:text-gray-600 cursor-pointer'>Terms</span>
            <span className='hover:text-gray-600 cursor-pointer'>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer