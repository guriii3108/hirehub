import Application from "../models/applicaton.model.js";
import Job from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const userId = req.id;

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
            company: job.company,
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            success: true,
            message: "Application submitted successfully",
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
    const userId = req.id;
    const applications = await Application.find({applicant:userId}).populate("job").populate("company").sort({createdAt:-1});
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

///for admin
export const getApplicants = async(req,res)=>{
  try {
    const {jobId} = req.params; //single job related
    const {userId} = req.id; //admin id

    //check if the job exist for not
    const job = await Job.findById(jobId).populate({
      path:"applications",
      options:{sort:{createdAt:-1}},
      populate:{
        path:"applicant",
        populate:{
          path:"profile", //nested population 
        }
      }
    })

    if(!job){
      return res.status(404).json({
        success:false,
        message:"Job not found",
      })
    }
    return res.status(200).json({
      success:true,
      message:"Applicants fetched successfully",
      job
    })
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:error.message
    }) 
  }
}

export const updateApplicationStatus = async(req,res)=>{
  try {
    const {applicationId} = req.params; //we handle from frontend
    const {status} = req.body;
    const {userId} = req.id;
    if(!status){
      return res.status(400).json({
        success:false,
        message:"Status is required",
      })
    }

    //check if the application exist for not
    const application = await Application.findById(applicationId)
    if(!application){
      return res.status(404).json({
        success:false,
        message:"Application not found",
      })
    }
    //update the application status
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      success:true,
      message:"Application status updated successfully",
      data:application
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:error.message
    }) 
  }
}