import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Jobs from './pages/Jobs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './pages/Browse.jsx'
import Profile from './pages/Profile.jsx'
import JobDetail from './pages/JobDetail.jsx'
import useGetAllJobs from './hooks/useGetAllJobs.jsx'

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
    }
  ])
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App