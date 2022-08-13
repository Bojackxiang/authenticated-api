import express from "express";
import swaggerRouter from "./swagger";

const builderRouters = express.Router();

// swagger
builderRouters.use("/api-docs", swaggerRouter);

export default builderRouters;
