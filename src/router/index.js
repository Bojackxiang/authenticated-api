import express from "express";
import swaggerRouter from "./swagger";
import auth from "./auth";

const builderRouters = express.Router();

// swagger
builderRouters.use("/api-docs", swaggerRouter);
builderRouters.use("/auth", auth);

export default builderRouters;
