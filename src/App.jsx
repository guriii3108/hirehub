import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import OnBoarding from './pages/OnBoarding'
import JobListing from './pages/JobListing'
import Job from './pages/Job'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<LandingPage />
      },
      {
        path:"/onboarding",
        element:<OnBoarding />
      },
      {
        path:"/jobs",
        element:<JobListing />
      },
      {
        path:"/job/:id",
        element:<Job />
      },
      {
        path:"/post-job",
        element:<PostJob />
      },
      {
        path:"/saved-job",
        element:<SavedJobs />
      },

    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App