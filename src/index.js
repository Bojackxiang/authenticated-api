import "dotenv/config";
import app from "./app";
import serverRunning from "./utils/severRunning";

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
