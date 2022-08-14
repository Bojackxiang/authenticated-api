import { parseJwtContent } from "../../utils/jwt";
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
    if (!isJwtVerified) {
      return Response.notAuthorized(res, { message: "invalid jwt token" });
    }
    //  TODO: 可以在这边解析出 用户来放到 request 中给后面的使用
    req.currentUser = parseJwtContent(token);
    next();
  } catch (error) {
    return Response.notAuthorized(res, { message: error.message });
  }
}

export default requireAuth;
