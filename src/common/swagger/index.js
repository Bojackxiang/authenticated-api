import * as path from "path";
const createMiddleware = require("@apidevtools/swagger-express-middleware");

const swaggerSupport = function(app) {
  createMiddleware(path.join(__dirname, "api.yaml"), app, function(
    err,
    middleware
  ) {
    app.use(
      middleware.files(
        { caseSensitive: false, strict: false },
        {
          useBasePath: false,
          apiPath: "/api/v1/spec",
        }
      )
    );

    app.listen(8000, function() {
      console.log("Swagger is now running at http://localhost:8000/swagger");
    });
  });
};

export default swaggerSupport;
