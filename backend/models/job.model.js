import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    trim: true
  },
  description:{
    type: String,
    required: true,
    trim: true
  },
  requirements:{
    type: [String],
    required: true,
    trim: true
  },
  salary:{
    type: Number,
    required: true,
  },
  experience:{
    type: Number,
    required: true,
  },
  location:{
    type: String,
    required: true,
    trim: true
  },
  jobType:{ //full time, part time, contract
    type: String,
    required: true,
    trim: true
  },
  position:{
    type:Number,
    required: true,
  },
  company:{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  createdBy:{ //admin who created the job
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application"
  }]
},{timestamps: true})

const Job = mongoose.model("Job", jobSchema);
export default Job;