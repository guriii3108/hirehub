import React from 'react'
import { FileText, MapPin, Mail, Phone } from 'lucide-react'

const ApplicantsTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200'>
          <tr>
            <th className='px-6 py-4 font-semibold'>Applicant Info</th>
            <th className='px-6 py-4 font-semibold'>Contact</th>
            <th className='px-6 py-4 font-semibold'>Resume</th>
            <th className='px-6 py-4 font-semibold'>Date Applied</th>
            <th className='px-6 py-4 font-semibold text-right'>Actions</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {/* Example Row - You will map over dynamic data here! */}
          <tr className='hover:bg-gray-50/50 transition-colors group'>
            {/* Applicant Name & Location */}
            <td className='px-6 py-4'>
              <div className="flex flex-col gap-1">
                <span className='font-medium text-gray-900 text-base'>John Doe</span>
                <span className="flex items-center text-xs text-gray-500 gap-1">
                  <MapPin className="w-3 h-3" />
                  CA, USA
                </span>
              </div>
            </td>

            {/* Contact Details */}
            <td className='px-6 py-4'>
              <div className="flex flex-col gap-1.5 text-gray-600">
                <span className="flex items-center gap-2 text-sm">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  [EMAIL_ADDRESS]
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  (+1) 123-456-7890
                </span>
              </div>
            </td>

            {/* Resume Link */}
            <td className='px-6 py-4'>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </td>

            {/* Date Applied */}
            <td className='px-6 py-4 text-gray-600'>
              15 July 2024
            </td>

            {/* Action Buttons */}
            <td className='px-6 py-4 text-right'>
              <div className="flex items-center justify-end gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 rounded-lg transition-all shadow-sm">
                  Accept
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 hover:border-rose-300 rounded-lg transition-all shadow-sm">
                  Reject
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ApplicantsTable