import React, { useState } from 'react'
import { FileText, MapPin, Mail, Phone } from 'lucide-react'

const ApplicantsTable = () => {

  const applicant = {
    _id: "1",
    name: "John Doe",
    email: "[EMAIL_ADDRESS]",
    phone: "1234567890",
    location: "CA, USA",
    resume: "https://example.com/resume.pdf",
    dateApplied: "2022-01-01"
  }

  const [confirmAction, setConfirmAction] = useState({
    isOpen: false,
    type: null, // "accept" or "reject"
    applicantId: null
  });



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
                <button onClick={() => setConfirmAction({ isOpen: true, type: 'accept', applicantId: applicant._id })} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 rounded-lg transition-all shadow-sm">
                  Accept
                </button>
                <button onClick={() => setConfirmAction({ isOpen: true, type: 'reject', applicantId: applicant._id })} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 hover:border-rose-300 rounded-lg transition-all shadow-sm">
                  Reject
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {confirmAction.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {confirmAction.type === 'accept' ? 'Accept Applicant?' : 'Reject Applicant?'}
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {confirmAction.type} this application? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              {/* The "No" Button */}
              <button
                onClick={() => setConfirmAction({ isOpen: false, type: null, applicantId: null })}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>

              {/* The "Yes" Button */}
              <button
                // onClick={() => handleUpdateStatus(confirmAction.applicantId, confirmAction.type)}
                className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${confirmAction.type === 'accept'
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-rose-600 hover:bg-rose-700'
                  }`}
              >
                Yes, {confirmAction.type === 'accept' ? 'Accept' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default ApplicantsTable