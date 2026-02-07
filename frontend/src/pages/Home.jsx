import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection.jsx'
import Navbar from '../components/Navbar'
import LatestJobs from '../components/LatestJobs.jsx'
import Footer from '../components/Footer.jsx'
import useGetAllJobs from '../hooks/useGetAllJobs.jsx'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => { //because before redirecting to home page we have to check if the user is recruiter or not
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []) //only one time calling at first
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <LatestJobs />
      <Footer />
    </>
  )
}

export default Home