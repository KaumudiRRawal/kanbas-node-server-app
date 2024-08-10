import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import Hello from "./hello.js"
import Lab5 from "./Lab 5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import PathParameters from "./Lab 5/PathParameters.js";
import QueryParameters from "./Lab 5/QueryParameters.js";
import WorkingWithObjects from "./Lab 5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab 5/WorkingWithArrays.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING ||"mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app=express();
app.use(cors()); 
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
app.listen(process.env.PORT ||4000);
