const serverRunning = () => {
  console.log({
    version: process.env.npm_package_version,
  });
  console.log("Server started on port 3000");
};

export default serverRunning;
