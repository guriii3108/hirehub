import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description:{
    type: String,
    trim: true
  },
  logo:{
    type: String, //cloudinary url
  },
  userId:{ // admin/user who created the company
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
},{timestamps: true})

const Company = mongoose.model("Company", companySchema);
export default Company;