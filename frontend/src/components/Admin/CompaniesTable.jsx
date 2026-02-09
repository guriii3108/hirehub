import React from 'react'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import useGetAllCompanies from '../../hooks/useGetAllCompanies'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
  const navigate = useNavigate();

  useGetAllCompanies()
  const { companies } = useSelector(store => store.company)

  return (
    <div className='overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200'>
          <tr>
            <th className='px-6 py-4 font-semibold'>Logo</th>
            <th className='px-6 py-4 font-semibold'>Name</th>
            <th className='px-6 py-4 font-semibold'>Date</th>
            <th className='px-6 py-4 font-semibold text-right'>Action</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {companies.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-8 text-gray-400 font-medium">
                No Companies Found
              </td>
            </tr>
          ) : (
            companies.map((item, index) => (
              <tr key={index} className='hover:bg-gray-50/50 transition-colors group cursor-pointer'>
                <td className='px-6 py-4'>
                  <div className='w-12 h-12 rounded-lg border border-gray-200 bg-white flex items-center justify-center p-1 shadow-sm'>
                    <img
                      src={item.logo || " "} // Fallback image
                      alt={item.name}
                      className=' w-full h-full object-contain rounded'
                    />
                  </div>
                </td>
                <td className='px-6 py-4 font-medium text-gray-900'>{item.name}</td>
                <td className='px-6 py-4 text-gray-600'>{item.createdAt.split("T")[0]}</td>
                <td className='px-6 py-4 text-right'>
                  <button title="Edit" onClick={()=>navigate(`/admin/companies/${item._id}`)} className='p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors'>
                    <MoreHorizontal className='w-5 h-5' />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CompaniesTable