import Job from "../models/job.model.js";

export const postJob = async(req,res)=>{
  try {
    const {title,description,requirements,position,salary,jobType,location,companyId,experience,} = req.body;
    const userId = req.id;
    if(!title || !description || !requirements || !position || !salary || !jobType || !location || !companyId || !experience){
      return res.status(400).json({
        message:"All fields are required",
        success:false,
      })
    }
    const job = await Job.create({
      title,
      description,
      requirements:requirements.split(","),
      salary:Number(salary),
      jobType,
      location,
      company:companyId,
      position,
      experience:Number(experience),
      createdBy:userId,
    })
    return res.status(201).json({
      message:"Job created successfully",
      success:true,
      job,
    })
  } catch (error) {
    return res.status(500).json({
      message:error.message,
      success:false,
    })
  }
}  

//to see all jobs
export const getAllJobs = async(req,res)=>{
  try {
    //with filtering(query parameters)
    const keyword = req.query.keyword || "";
    const queryObject = {
      $or:[
        {title:{$regex:keyword,$options:"i"}}, //i means case insensitive
        {description:{$regex:keyword,$options:"i"}},
        {requirements:{$regex:keyword,$options:"i"}},
      ]
    };
    const jobs = await Job.find(queryObject).populate("company").sort({createdAt:-1});
    if(!jobs){
      return res.status(404).json({
        message:"No jobs found",
        success:false,
      })
    }
    return res.status(200).json({
      message:"All jobs",
      success:true,
      jobs,
    })
  } catch (error) {
    return res.status(500).json({
      message:error.message,
      success:false,
    })
  }
}

//get single job(byId) ....  for user
export const getJobById = async(req,res)=>{
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if(!job){
      return res.status(404).json({
        message:"Job not found",
        success:false,
      })
    }
    return res.status(200).json({
      message:"Job found",
      success:true,
      job,
    })
    
  } catch (error) {
    return res.status(500).json({
      message:error.message,
      success:false,
    })
  }
}

//get job .. for admin
export const getAdminJobs = async(req,res)=>{
  try {
    const adminId = req.id;
    const jobs = await Job.find({createdBy:adminId});
    if(!jobs){
      return res.status(404).json({
        message:"No jobs found",
        success:false,
      })
    }
    return res.status(200).json({
      message:"All jobs",
      success:true,
      jobs,
    })
    
    
  } catch (error) {
    return res.status(500).json({
      message:error.message,
      success:false,
    })
  }
}

