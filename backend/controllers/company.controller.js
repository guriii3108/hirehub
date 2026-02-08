import Company from "../models/company.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";

export const registerCompany = async(req,res)=>{
  try {
    const {companyName} = req.body;
    if(!companyName){
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }
    const company = await Company.findOne({
      name: companyName,
    });
    if(company){
      return res.status(400).json({
        message: "Company already exists",
        success: false,
      });
    }
    const newCompany = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company registered successfully",
      success: true,
      company: newCompany,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });    
  }
}

export const getCompany = async(req,res)=>{
  try {
    const userId = req.id; //from auth middleware because the loggined user can only see his companies
    const companies = await Company.find({userId});
    if(!companies){
      return res.status(404).json({
        message: "No companies found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Companies fetched successfully",
      success: true,
      companies,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });    
  }
}

//get companyById
export const getCompanyById = async(req,res)=>{
  try{
    const {id} = req.params;
    const company = await Company.findById(id); //company - single company
    if(!company){
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company fetched successfully",
      success: true,
      company,
    });
  }catch(error){
    return res.status(500).json({
      message: error.message,
      success: false,
    });    
  }
}

//update company information
export const updateCompany = async(req,res)=>{
  try {
    const {name,description,website,location} = req.body;
    const {id} = req.params; //from auth middleware
    const file = req.file; //for logo
    let logo;
    if(file){
    //cloudinary logo upload
    const fileUri = getDataUri(file);
    const cloudinaryResponse = await cloudinary.uploader.upload(fileUri.content, {
      folder: "company-logos",
    });
    logo = cloudinaryResponse.secure_url;
    }

    const updateData = {};
    if(name){
      updateData.name = name;
    }
    if(description){
      updateData.description = description;
    }
    if(website){
      updateData.website = website;
    }
    if(location){
      updateData.location = location;
    }
    if(logo){
      updateData.logo = logo;
    }

    const company = await Company.findByIdAndUpdate(id,updateData,{new:true}); //new:true returns updated document 

    //if any field is not provided then it will not be updated
    if(!company){
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company updated successfully",
      success: true,
      company,
    });
  } 
  catch (error) {
    return res.status(500).json({
      message:error.message,
      success:false,
    })
  }
}