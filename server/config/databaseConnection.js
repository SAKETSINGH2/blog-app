import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DatabaseConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connected successfully");
    } catch (error) {
        console.log("issue in database connection", error);
        process.exit(1);
    }
};

export default DatabaseConnect;
