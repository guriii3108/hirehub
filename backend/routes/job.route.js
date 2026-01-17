import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
const route = Router();

route.post("/post-job",isAuthenticated,postJob);
route.get("/get-all-jobs",getAllJobs);
route.get("/get-job/:id",getJobById);
route.get("/get-admin-jobs",isAuthenticated,getAdminJobs);

export default route;