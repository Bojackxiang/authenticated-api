import jwt from "jsonwebtoken";

// const SECRET = appConfig.jwt.secret;
// const EXPIRE = appConfig.jwt.expire;
const SECRET = process.env.JWT_SECRET;
const EXPIRE = process.env.JWT_EXP;

function generateJWTToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRE });
}

export default generateJWTToken;
