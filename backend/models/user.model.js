import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true,
    trim: true // remove extra spaces
  },
  email:{
    type: String,
    required: true,
    unique: true, // no two users can have same email
    trim: true
  },
  phoneNumber:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true // remove extra spaces
  },
  role:{
    type: String,
    enum: ["jobseeker", "recruiter"],
    default: "jobseeker" // default role is jobseeker
  },
  profile:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile" // ref is the name of the model
  }
},{timestamps: true})

const User = mongoose.model("User", userSchema);
export default User;