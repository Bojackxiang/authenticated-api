import "dotenv/config";
import express from "express";
import serverRunning from "./utils/severRunning";
import builderRouters from "./router";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";

// Create an Express app
const app = express();
app.use(bodyParser.json());
app.set("trust proxy", true); // 用于解决 nginx 的代理问题
app.use(
  cookieSession({
    signed: false,
    //secure: true, // cookie session only works in https, 注视掉，方便本地测试
  })
);

app.use(builderRouters);

// handle ungracefully exit
const server = app.listen(3000, serverRunning);
[
  "exit",
  "SIGINT",
  "SIGUSR1",
  "SIGUSR2",
  "uncaughtException",
  "SIGTERM",
].forEach((eventType) => {
  process.on(eventType, async () => {
    await server.close();
  });
});
