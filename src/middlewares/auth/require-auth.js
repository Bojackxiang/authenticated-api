import jwtVerification from "../../utils/jwt/verify";
import Response from "../../utils/response";

async function requireAuth(req, res, next) {
  // check if the session exists
  const token = req.session?.jwt;

  if (!token) {
    return Response.notAuthorized(res);
  }

  try {
    const isJwtVerified = jwtVerification(token);
    console.log("isJwtVerified: ", isJwtVerified);
    if (!isJwtVerified) {
      return Response.notAuthorized(res, { message: "invalid jwt token" });
    }
    next();
  } catch (error) {
    return Response.notAuthorized(res, { message: error.message });
  }
}

export default requireAuth;
