import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try{
        const mongoURI = process.env.MONGO_URI;
        if(!mongoURI){
            throw new Error("Mongo_URI is not defined in .env");
        }
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    }catch(error){
        console.error("MongoDB Connection error: ",error);
        process.exit(1);
    }
    
};

export default connectDB;