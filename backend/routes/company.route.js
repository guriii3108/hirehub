import { Router } from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { singleUpload } from "../middlewares/multer.js";
const route = Router();

//company routes
route.post("/register",isAuthenticated,registerCompany);
route.get("/get-company",isAuthenticated,getCompany);
route.get("/get-company/:id",isAuthenticated,getCompanyById);
route.put("/update-company/:id",isAuthenticated,singleUpload,updateCompany);


export default route;