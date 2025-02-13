import express from "express";
import blogRouter from "./blog/index.js";

const router = express.Router();

router.use("/blog", blogRouter);

export default router;
