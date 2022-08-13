import express from "express";
import gracefulShutdownHandler from "./utils/gracefulExit";
import serverRunning from "./utils/severRunning";
import builderRouters from "./router";
import "dotenv/config";

// Create an Express app
const app = express();

app.use(builderRouters);

const server = app.listen(3000, serverRunning);
process.on("SIGINT", () => gracefulShutdownHandler(server));
process.on("SIGTERM", () => gracefulShutdownHandler(server));
