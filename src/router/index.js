import express from "express";
import swaggerRouter from "./swagger";
import auth from "./auth";
import requireAuth from "../middlewares/auth/require-auth";

const builderRouters = express.Router();

// swagger
builderRouters.use("/api-docs", swaggerRouter);
builderRouters.use("/auth", auth);
builderRouters.get("/profile", requireAuth, (req, res) => {
  console.log("current user", req.currentUser);
  res.send("profile");
});

export default builderRouters;
