import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnection from "./utils/DB.js";
import routes from "./routes/routes.js";

dotenv.config();


dbConnection();

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001'],
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use(express.json())

app.use(express.urlencoded());

app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/v1", routes);

// app.use(routeNotFound);
// app.use(errorHandler);

app.listen(PORT, () => console.log("Server start at port ", PORT) )