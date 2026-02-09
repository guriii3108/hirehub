import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/Signup.jsx'
import Jobs from './pages/Jobs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './pages/Browse.jsx'
import Profile from './pages/Profile.jsx'
import JobDetail from './pages/JobDetail.jsx'
import useGetAllJobs from './hooks/useGetAllJobs.jsx'
import Companies from './components/Admin/Companies.jsx'
import PostJob from './components/Admin/PostJob.jsx'
import CreateCompany from './components/Admin/CreateCompany.jsx'
import CompanyDetail from './components/Admin/CompanyDetail.jsx'
import AdminJobs from './components/Admin/AdminJobs.jsx'

const App = () => {
  useGetAllJobs();
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/jobs',
      element: <Jobs />
    },
    {
      path: '/description/:id',
      element: <JobDetail />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    //for recruiter
    {
      path: '/admin/companies',
      element: <Companies />
    },
    {
      path: '/admin/post-job',
      element: <PostJob />
    },
    {
      path: "/admin/companies/create-company",
      element: <CreateCompany />
    },
    {
      path: "/admin/companies/:companyId",
      element: <CompanyDetail />
    },
    {
      path: "/admin/jobs",
      element: <AdminJobs />
    }
  ])
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App