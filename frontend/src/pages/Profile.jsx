import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Mail, Phone, MapPin, Link as LinkIcon,
  FileText, Edit3, Grid, List,
  Briefcase, CheckCircle, Clock, XCircle,
  Download, ExternalLink,
  Upload
} from 'lucide-react'
import UpdateProfileDialouge from '../components/UpdateProfileDialouge'

const Profile = () => {
  const { user } = useSelector((store) => store.auth);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  // Placeholder data tailored for a job portal
  const skills = [
    { name: "React", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "TypeScript", level: "Advanced" }
  ];

  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Engineer",
      date: "2024-02-15",
      status: "Interview",
      logo: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Full Stack Developer",
      date: "2024-02-10",
      status: "Pending",
      logo: "https://www.logo.wine/a/logo/Microsoft/Microsoft-Logo.wine.svg"
    },
    {
      id: 3,
      company: "Netflix",
      role: "UI Engineer",
      date: "2024-02-05",
      status: "Rejected",
      logo: "https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
    },
    {
      id: 4,
      company: "Spotify",
      role: "Web Developer",
      date: "2024-01-28",
      status: "Accepted",
      logo: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg"
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Interview': return 'bg-blue-50 text-blue-700 ring-blue-700/10';
      case 'Pending': return 'bg-yellow-50 text-yellow-700 ring-yellow-600/20';
      case 'Rejected': return 'bg-red-50 text-red-700 ring-red-600/10';
      case 'Accepted': return 'bg-green-50 text-green-700 ring-green-600/20';
      default: return 'bg-gray-50 text-gray-600 ring-gray-500/10';
    }
  };

  const name = user?.fullName?.split(" ").map((word) => word.charAt(0).toUpperCase()).join("") || "U";

  return (
    <div className='min-h-screen bg-gray-50/50'>
      <Navbar />

      <main className='container max-w-7xl mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Sidebar - Personal Info */}
          <aside className='w-full lg:w-1/3 space-y-6'>
            {/* Profile Card */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10'></div>

              <div className='relative flex flex-col items-center text-center mt-4'>
                <div className='w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white mb-4'>
                  <img
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${name}&background=2563eb&color=fff&size=128`}
                    alt={user?.fullName}
                    className='w-full h-full object-cover'
                  />
                </div>
                <h1 className='text-2xl font-bold text-gray-900'>{user?.fullName}</h1>
                <p className='text-gray-500 font-medium mt-1'>{user?.role || "Software Engineer"}</p>

                <div className='mt-6 w-full space-y-4 text-left'>
                  <div className='flex items-center gap-3 text-gray-600'>
                    <div className='p-2 bg-gray-50 rounded-lg'><Mail size={18} /></div>
                    <span className='text-sm truncate'>{user?.email}</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-600'>
                    <div className='p-2 bg-gray-50 rounded-lg'><Phone size={18} /></div>
                    <span className='text-sm'>+1 234 567 890</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-600'>
                    <div className='p-2 bg-gray-50 rounded-lg'><MapPin size={18} /></div>
                    <span className='text-sm'>San Francisco, CA</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-600'>
                    <div className='p-2 bg-gray-50 rounded-lg'><LinkIcon size={18} /></div>
                    <a href="#" className='text-sm text-blue-600 hover:underline'>portfolio.dev</a>
                  </div>
                </div>

                <button onClick={() => setIsEditing(true)} className='w-full mt-8 bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2'>
                  <Edit3 size={16} />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Resume Widget */}
            {user?.resume ? (
              <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
              <h3 className='font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <FileText className='text-blue-600' size={20} />
                Resume
              </h3>
              <div className='p-4 border border-gray-200 rounded-xl bg-gray-50/50'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='font-medium text-sm text-gray-700'>My-Resume-2024.pdf</span>
                  <span className='text-xs text-green-600 font-medium px-2 py-0.5 bg-green-50 rounded-full'>Active</span>
                </div>
                <p className='text-xs text-gray-500 mb-4'>Last updated: 2 days ago</p>
                <div className='flex gap-2'>
                  <a target='_blank' href="https://www.google.com/" className='flex-1 bg-white border border-gray-200 text-gray-700 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'>
                    <ExternalLink size={14} /> View
                  </a>
                  <button className='flex-1 bg-blue-600 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'>
                    <Download size={14} /> Download
                  </button>
                </div>
              </div>
            </div>
            ) : (
              <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
              <h3 className='font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <FileText className='text-blue-600' size={20} />
                Resume
              </h3>
              <div className='p-4 border border-gray-200 rounded-xl bg-gray-50/50'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='font-medium text-sm text-gray-700'>No Resume Uploaded</span>
                </div>
                <p className='text-xs text-gray-500 mb-4'>Upload your resume to get started</p>
                <div className='flex gap-2'>
                  <button className='flex-1 bg-blue-600 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'>
                    <Upload size={14} /> Upload
                  </button>
                </div>
              </div>
            </div>
            )}
            

            {/* Skills Widget */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='font-bold text-gray-900'>Skills</h3>
                <button className='text-gray-400 hover:text-black'><Edit3 size={16} /></button>
              </div>
              <div className='flex flex-wrap gap-2'>
                { user?.profile?.skills?.length === 0 ? (
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-default'>
                    No Skills Added
                  </span>
                ) : (
                  user?.profile?.skills.map((skill, i) => (
                    <span key={i} className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-default'>
                      {skill}
                    </span>
                  ))
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className='flex-1 space-y-6'>

            {/* Stats Grid */}
            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-white p-5 rounded-2xl border border-gray-100 shadow-sm'>
                <p className='text-gray-500 text-sm font-medium'>Total Applications</p>
                <p className='text-3xl font-bold text-gray-900 mt-2'>14</p>
              </div>
              <div className='bg-white p-5 rounded-2xl border border-gray-100 shadow-sm'>
                <p className='text-gray-500 text-sm font-medium'>Interviews Scheduled</p>
                <p className='text-3xl font-bold text-gray-900 mt-2'>03</p>
              </div>
              <div className='bg-white p-5 rounded-2xl border border-gray-100 shadow-sm'>
                <p className='text-gray-500 text-sm font-medium'>Profile Views</p>
                <p className='text-3xl font-bold text-gray-900 mt-2'>128</p>
              </div>
            </div>

            {/* Application History */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
              <div className='p-6 border-b border-gray-100 flex items-center justify-between'>
                <h2 className='text-lg font-bold text-gray-900'>Application History</h2>
                <div className='flex gap-2'>
                  <button className={`p-2 rounded-lg ${activeTab === 'overview' ? 'bg-gray-100 text-black' : 'text-gray-400'}`}>
                    <List size={20} />
                  </button>
                  <button className={`p-2 rounded-lg ${activeTab === 'grid' ? 'bg-gray-100 text-black' : 'text-gray-400'}`}>
                    <Grid size={20} />
                  </button>
                </div>
              </div>

              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-50/50'>
                    <tr>
                      <th className='text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-4 px-6'>Company</th>
                      <th className='text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-4 px-6'>Role</th>
                      <th className='text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-4 px-6'>Date</th>
                      <th className='text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-4 px-6'>Status</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {applications.map((app) => (
                      <tr key={app.id} className='hover:bg-gray-50/50 transition-colors group cursor-pointer'>
                        <td className='py-4 px-6'>
                          <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center p-2 border border-gray-100'>
                              <img src={app.logo} alt={app.company} className='w-full h-full object-contain' />
                            </div>
                            <span className='font-medium text-gray-900'>{app.company}</span>
                          </div>
                        </td>
                        <td className='py-4 px-6 text-sm text-gray-600'>{app.role}</td>
                        <td className='py-4 px-6 text-sm text-gray-500'>{app.date}</td>
                        <td className='py-4 px-6'>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusStyle(app.status)}`}>
                            {app.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='p-4 border-t border-gray-100 text-center'>
                <button className='text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors'>
                  View All Applications
                </button>
              </div>
            </div>

            {/* Bios */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='font-bold text-gray-900'>About</h3>
                <button className='text-gray-400 hover:text-black'><Edit3 size={16} /></button>
              </div>
              <p className='text-gray-600 leading-relaxed text-sm'>
                I am a passionate Full Stack Developer with experience in building scalable web applications.
                I love working with React, Node.js, and modern CSS frameworks. I am currently looking for new opportunities
                where I can contribute to the team's success while learning new technologies.
              </p>
            </div>

          </section>
        </div>
      </main>

      {/* Update Profile Dialouge(popup) */}
      <UpdateProfileDialouge open={isEditing} setOpen={setIsEditing} />

      <Footer />
    </div>
  )
}

export default Profile