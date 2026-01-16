import { Router } from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const route = Router();

//company routes
route.post("/register",authMiddleware,registerCompany);
route.get("/get-company",authMiddleware,getCompany);
route.get("/get-company/:id",authMiddleware,getCompanyById);
route.put("/update-company/:id",authMiddleware,updateCompany);


export default route;