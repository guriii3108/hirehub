import FilterCard from "../components/FilterCard";
import Job from "../components/Job";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Jobs = () => {
  const {allJobs} = useSelector((store) => store.job);

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto bg-gray-50/50 min-h-screen mt-5'>
        <div className='flex gap-5 px-4 sm:px-6 lg:px-8 py-8'>

          {/* Sidebar / Filter - Sticky on Desktop */}
          <div className='w-full md:w-[20%]'>
            <FilterCard />
          </div>

          {/* Job List section */}
          <div className='flex-1 h-[88vh] overflow-y-auto pb-5 no-scrollbar'>
            {allJobs.length <= 0 ? (
              <div className='flex flex-col items-center justify-center h-full'>
                <img className='w-24 h-24 mb-4 opacity-50 grayscale' src="https://cdn-icons-png.flaticon.com/512/7486/7486777.png" alt="No jobs" />
                <span className='font-bold text-xl text-gray-800'>No Jobs Found</span>
                <p className='text-gray-500 mt-2 text-center'>We couldn't find any jobs matching your filters. <br /> Try clearing filters or searching for something else.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {allJobs.map((job) => (
                  <div key={job._id}>
                    <Job job={job}/>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Jobs