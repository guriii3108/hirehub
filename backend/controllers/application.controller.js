import Application from "../models/applicaton.model.js";
import Job from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const { userId } = req.id;

        if (!jobId) {
            return res.status(400).json({
                success: false,
                message: "Job ID is required",
            });
        }
        //before applyting the job check if the job is already applied
        const application = await Application.findOne({
            job: jobId,
            applicant: userId,
        });
        if (application) {
            return res.status(400).json({
                success: false,
                message: "You have already applied for this job",
            });
        }

        //check if the job exist for not
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found",
            });
        }

        //create a new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            success: true,
            message: "Application created successfully",
            data: newApplication,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAppliedJobs = async(req,res)=>{
  try {
    const {userId} = req.id;
    const applications = await Application.find({applicant:userId}).populate("job").sort({createdAt:-1});
    if(!applications){
      return res.status(404).json({
        success:false,
        message:"No applications found",
      })
    }
    return res.status(200).json({
      success:true,
      message:"Applied jobs fetched successfully",
      data:applications
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:error.message
    }) 
  }
}

