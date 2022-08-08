import express from "express";
import gracefulShutdownHandler from "./utils/gracefulExit";
import serverRunning from "./utils/severRunning";
import builderRouters from "./router";

// Create an Express app
const app = express();
console.log("hello world");

app.use(builderRouters);

const server = app.listen(3000, serverRunning);
process.on("SIGINT", () => gracefulShutdownHandler(server));
process.on("SIGTERM", () => gracefulShutdownHandler(server));
