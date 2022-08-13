import express from "express";
import gracefulShutdownHandler from "./utils/gracefulExit";
import serverRunning from "./utils/severRunning";
import builderRouters from "./router";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import "dotenv/config";

// Create an Express app
const app = express();
app.use(bodyParser.json());
app.set("trust proxy", true); // 用于解决 nginx 的代理问题
app.use(
  cookieSession({
    signed: false,
    secure: true, // cookie session only works in https
  })
);

app.use(builderRouters);

const server = app.listen(3000, serverRunning);
process.on("SIGINT", () => gracefulShutdownHandler(server));
process.on("SIGTERM", () => gracefulShutdownHandler(server));
