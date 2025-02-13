import express from "express";
import DatabaseConnect from "./config/databaseConnection.js";
import apiRouter from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

DatabaseConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/backend/api", apiRouter);

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});
