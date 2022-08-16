import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import config from "../appConfig";

// use path notmalize 可以找到想要的相对路径，就算是 build 完成了也可以
const root = path.normalize(`${__dirname}/..`);
export const docPath = [`${root}/swagger/routers/router-*.yaml`];
export const schemes = ["http", "https"];
const swaggerDefinition = {
  ...config.swagger,
  docPath: docPath,
  schemes: schemes,
};
const options = {
  swaggerDefinition,
  scheme: swaggerDefinition.schemes,
  apis: swaggerDefinition.docPath,
};
export const swaggerSpec = swaggerJSDoc(options);
