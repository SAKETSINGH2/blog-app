import express from "express";
import cors from "cors";
import DatabaseConnect from "./config/databaseConnection.js";
import apiRouter from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
    cors({
        origin: "https://blog-app-pi-ivory.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

DatabaseConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/backend/api", apiRouter);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
