import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showError, showSuccess } from '../utils/toast'
import { APPLICATION_API_ENDPOINT } from '../utils/constant'
import { setAppliedJobs } from '../redux/jobSlice'


const useGetAllAppliedJob = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${APPLICATION_API_ENDPOINT}/applied-jobs`, {
          withCredentials: true
        })
        if (response?.data?.success) {
          showSuccess(response?.data?.message)
          // dispatch(setAppliedJobs(response?.data?.data))
          console.log(response?.data)
        }
      } catch (error) {
        showError(error?.response?.data?.message || "Failed to fetch applied jobs")
      } finally {
        setLoading(false)
      }
    }
    fetchAppliedJobs()
  }, [])
}




export default useGetAllAppliedJob