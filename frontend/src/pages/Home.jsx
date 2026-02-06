import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection.jsx'
import Navbar from '../components/Navbar'
import LatestJobs from '../components/LatestJobs.jsx'
import Footer from '../components/Footer.jsx'
import useGetAllJobs from '../hooks/useGetAllJobs.jsx'

const Home = () => {
  useGetAllJobs();
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