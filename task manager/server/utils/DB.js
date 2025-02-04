import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("DB connected");
    } catch (error) {
        console.log("Error while connecting to DB", error);
        
    }
}   


export default dbConnection;