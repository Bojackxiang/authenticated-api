import { verify } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

function jwtVerification(token) {
  try {
    verify(token, SECRET);
    return true;
  } catch (error) {
    return false;
  }
}

export default jwtVerification;
