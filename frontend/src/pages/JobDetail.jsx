import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MapPin, Briefcase, DollarSign, Clock, Globe, Users, Calendar, ArrowLeft, Send, Bookmark, Share2 } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSingleJob } from '../redux/jobSlice'
import { useSelector } from 'react-redux'
import { showError, showSuccess } from '../utils/toast'


const JobDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const jobId = params.id;

  const { user } = useSelector((store) => store.auth);
  const { singleJob } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const isInitialApplied = singleJob?.applications?.some((applications) => applications.applicant === user?._id);
  // const isInitialApplied = singleJob?.applications?.includes(user?._id);
  console.log(isInitialApplied);

  const [isApplied, setIsApplied] = useState(isInitialApplied);

  const applyJobHandler = async () => {
    try {
      const response = await axios.get(`${APPLICATION_API_ENDPOINT}/apply/${jobId}`, {
        withCredentials: true,
      })
      if (response.data.success) {
        console.log(response.data);
        showSuccess(response.data.message);
        setIsApplied(true); //UPDATE LOCAL STATE
        const updatedJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]}
        dispatch(setSingleJob(updatedJob)); //realtime UI update
      }
    } catch (error) {
      console.log(error);
      showError(error.response.data.message);
    }
  }

  const daysAgoFunction = (date) => {
    const createdAt = new Date(date);
    const today = new Date();
    const diffTime = today - createdAt;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    const getSingleJob = async () => {
      try {
        const response = await axios.get(`${JOB_API_ENDPOINT}/get-job/${jobId}`, {
          withCredentials: true,
        });
        if (response.data.success) {
          dispatch(setSingleJob(response.data.job));
          setIsApplied(response.data.job.applications.some((applications) => applications.applicant === user?._id)); //ensure the state is in sync with the fetched data;
        }
      } catch (error) {
        console.log(error);
      }
    }
    getSingleJob();
  }, [jobId, dispatch, user?._id]) //we use jobId because we want to get single job when jobId changes

  // Mock Data for UI Designing
  const job = {
    title: "Senior Frontend Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full Time",
    salary: "$120k - $160k",
    experience: "5+ Years",
    postedDate: "2 days ago",
    applicants: 145,
    description: "We are looking for a Senior Frontend Engineer to join our team. You will be responsible for building and maintaining high-quality web applications using React, Tailwind CSS, and other modern technologies. You will work closely with designers and backend engineers to deliver seamless user experiences.",
    requirements: [
      "5+ years of experience with JavaScript, React, and HTML/CSS.",
      "Strong understanding of modern web technologies and best practices.",
      "Experience with state management libraries like Redux or Zustand.",
      "Familiarity with testing frameworks like Jest and React Testing Library.",
      "Excellent problem-solving and communication skills."
    ],
    responsibilities: [
      "Develop user-facing features using React.js.",
      "Build reusable components and front-end libraries for future use.",
      "Translate designs and wireframes into high-quality code.",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers.",
      "Mentor junior developers and conduct code reviews."
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "Redux", "TypeScript", "Node.js"],
    companyInfo: {
      description: "Google's mission is to organize the world's information and make it universally accessible and useful. We build products that help people in their daily lives.",
      website: "https://careers.google.com"
    }
  }

  return (
    <div className='flex flex-col min-h-screen bg-gray-50/50'>
      <Navbar />

      <main className='flex-grow w-full'>

        {/* Hero Section - Gradient Background */}
        <div className='bg-gradient-to-r from-purple-50 to-white pt-10 pb-16 border-b border-gray-100'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <button
              onClick={() => navigate(-1)}
              className='flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors text-sm font-medium group'
            >
              <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
              Back to Jobs
            </button>

            <div className='flex flex-col md:flex-row items-start justify-between gap-8'>
              <div className='flex items-start gap-6'>
                {/* Company Logo - Clean & Large */}
                <div className='w-24 h-24 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center p-4 flex-shrink-0'>
                  <img
                    src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
                    alt={"Google"}
                    className='w-full h-full object-contain'
                  />
                </div>

                <div>
                  <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight'>{singleJob?.title}</h1>
                  <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 font-medium'>
                    <span className='flex items-center gap-1.5 text-[#6A38C2] bg-purple-50 px-3 py-1 rounded-full border border-purple-100'>
                      <Globe className='w-3.5 h-3.5' />
                      {singleJob?.company?.name || "India"}
                    </span>
                    <span className='flex items-center gap-1.5 text-gray-500'>
                      <MapPin className='w-4 h-4' />
                      {singleJob?.location || "India"}
                    </span>
                    <span className='flex items-center gap-1.5 text-gray-500'>
                      <Clock className='w-4 h-4' />
                      {daysAgoFunction(singleJob?.createdAt) === 0 ? "Today" : daysAgoFunction(singleJob?.createdAt) === 1 ? "Yesterday" : `${daysAgoFunction(singleJob?.createdAt)} d ago`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className='flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-4 md:mt-0'>
                <div className='flex items-center gap-3 w-full sm:w-auto'>
                  <button className='p-3.5 rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition-all text-gray-500 hover:text-[#6A38C2] bg-white/50 backdrop-blur-sm'>
                    <Share2 className='w-5 h-5' />
                  </button>
                  <button className='p-3.5 rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition-all text-gray-500 hover:text-[#6A38C2] bg-white/50 backdrop-blur-sm'>
                    <Bookmark className='w-5 h-5' />
                  </button>
                </div>
                <button onClick={isInitialApplied ? null : applyJobHandler}
                  className={`${isApplied ? 'bg-green-600 hover:bg-green-700' : 'bg-[#6A38C2] hover:bg-[#5b30a6] hover:shadow-lg hover:shadow-purple-500/30'} text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md w-full sm:w-auto flex items-center justify-center gap-2 transform active:scale-95`}
                >
                  {isApplied ? "Applied Successfully" : "Apply Now"}
                </button>
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 capitalize'>
              {[
                { icon: <DollarSign className='w-5 h-5' />, label: "Offer Salary", value: singleJob?.salary },
                { icon: <Briefcase className='w-5 h-5' />, label: "Job Type", value: singleJob?.jobType },
                { icon: <Users className='w-5 h-5' />, label: "Applicants", value: `${singleJob?.applications?.length} Applied` },
                { icon: <Calendar className='w-5 h-5' />, label: "Experience", value: singleJob?.experience },
              ].map((stat, index) => (
                <div key={index} className='bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100 hover:border-purple-100 hover:shadow-sm transition-all group'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2.5 rounded-lg bg-gray-50 group-hover:bg-purple-50 group-hover:text-[#6A38C2] text-gray-400 transition-colors'>
                      {stat.icon}
                    </div>
                    <div>
                      <p className='text-xs text-gray-500 font-medium uppercase tracking-wide'>{stat.label}</p>
                      <p className='text-sm font-bold text-gray-900 mt-0.5'>{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

            {/* Left Column: Job Description */}
            <div className='lg:col-span-2 space-y-10'>

              {/* About Role */}
              <div className='prose prose-purple max-w-none'>
                <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                  About the Role
                </h2>
                <p className='text-gray-600 leading-relaxed text-base'>
                  {singleJob?.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className='text-xl font-bold text-gray-900 mb-5'>Key Responsibilities</h2>
                <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
                  <ul className='space-y-4'>
                    {job.responsibilities.map((res, index) => (
                      <li key={index} className='flex items-start gap-3.5 text-gray-600'>
                        <div className='w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#6A38C2]'></span>
                        </div>
                        <span className='leading-relaxed'>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className='text-xl font-bold text-gray-900 mb-5'>Requirements</h2>
                <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
                  <ul className='space-y-4'>
                    {singleJob?.requirements?.map((item, index) => (
                      <li key={index} className='flex items-start gap-3.5 text-gray-600'>
                        <div className='w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#6A38C2]'></span>
                        </div>
                        <span className='leading-relaxed'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className='space-y-8'>

              {/* Skills Card */}
              <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='font-bold text-gray-900 mb-5 flex items-center gap-2'>
                  Required Skills
                </h3>
                <div className='flex flex-wrap gap-2.5'>
                  {singleJob?.skills?.map((skill, index) => (
                    <span key={index} className='px-3.5 py-1.5 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-[#6A38C2] hover:text-[#6A38C2] transition-colors cursor-default shadow-sm'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Overview */}
              <div className='bg-[#161b22] rounded-2xl p-6 text-white shadow-lg sticky top-6'>
                <h3 className='font-bold text-lg mb-6'>About {singleJob?.company?.name}</h3>

                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center'>
                    <img
                      src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
                      alt={job.company}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div>
                    <p className='font-bold text-lg leading-tight'>{job.company}</p>
                    <a href="#" className='text-xs text-gray-400 hover:text-white transition-colors'>View Company Profile</a>
                  </div>
                </div>

                <p className='text-gray-300 leading-relaxed text-sm mb-6 border-t border-gray-700 pt-6'>
                  {singleJob?.company?.description}
                </p>

                <button className='w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2 group'>
                  Visit Website
                  <Globe className='w-4 h-4 group-hover:rotate-12 transition-transform' />
                </button>
              </div>

            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default JobDetail