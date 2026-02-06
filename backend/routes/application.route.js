import { Router } from "express";
import { applyJob, getAppliedJobs, getApplicants, updateApplicationStatus } from "../controllers/application.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
const route = Router();

route.get("/apply/:jobId",isAuthenticated,applyJob);
route.get("/applied-jobs",isAuthenticated,getAppliedJobs);
route.get("/applicants/:jobId",isAuthenticated,getApplicants);
route.put("/update-status/:applicationId",isAuthenticated,updateApplicationStatus);

export default route;
