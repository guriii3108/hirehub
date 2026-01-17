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