const serverRunning = () => {
  console.log("API is running...");
  console.log("version: " + process.env.npm_package_version);
};

export default serverRunning;
