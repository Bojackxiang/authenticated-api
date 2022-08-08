import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../../swagger";

const swaggerRouter = express.Router();

swaggerRouter.use("", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default swaggerRouter;
