import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./utils/DB.js";
import routes from "./routes/routes.js";
import { routeNotFound, errorHandler } from "./middlewares/error.middleware.js";

dotenv.config({
    path: './.env'
})

connectDB();

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001'],
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/v1", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => 
    console.log("Server start at port ", PORT) )