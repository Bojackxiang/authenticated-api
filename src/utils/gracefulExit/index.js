const gracefulShutdownHandler = function gracefulShutdownHandler(server) {
  setTimeout(() => {
    console.log("Shutting down application....");
    server.close(function() {
      console.log("Exiting....");
      process.exit();
    });
  }, 0);
};

export default gracefulShutdownHandler;
