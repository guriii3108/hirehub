import React from 'react'
import { MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  const companies = [1]
  return (
    <div className='overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50/50 border-b border-gray-100'>
          <tr>
            <th className='px-6 py-4 font-medium'>Logo</th>
            <th className='px-6 py-4 font-medium'>Name</th>
            <th className='px-6 py-4 font-medium'>Date</th>
            <th className='px-6 py-4 font-medium text-right'>Action</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {companies.map((item, index) => (
            <tr key={index} className='hover:bg-gray-50/50 transition-colors group'>
              <td className='px-6 py-4'>
                <div className='w-10 h-10 rounded-lg border border-gray-100 bg-white flex items-center justify-center p-1'>
                  <img
                    src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
                    alt="Company Logo"
                    className='w-full h-full object-contain'
                  />
                </div>
              </td>
              <td className='px-6 py-4 font-medium text-gray-900'>Google</td>
              <td className='px-6 py-4'>24-07-2024</td>
              <td className='px-6 py-4 text-right'>
                <button className='p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors'>
                  <MoreHorizontal className='w-4 h-4' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CompaniesTable