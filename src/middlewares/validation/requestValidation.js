import { validationResult } from "express-validator";
import Response from "../../utils/response";

function requestValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorDetails = errors.array();
    Response.error(res, { data: errorDetails });
  } else {
    next();
  }
}

export default requestValidation;
