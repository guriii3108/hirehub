import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({ //this is from applicant... the one who filled the job application form
  job:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applicant:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status:{
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  },
  resume:{
    type: String,
  },
},{timestamps: true})

const Application = mongoose.model("Application", applicationSchema);
export default Application;
