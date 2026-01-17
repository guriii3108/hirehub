import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/dbConnect.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//v1.. v2.. and on soo on .. it's called versioning for future.. if we make changes in api we can create new version
app.use("/api/v1/user",userRoute); //user routes
app.use("/api/v1/company",companyRoute); //company routes

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});