import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export default function parseJwtContent(token) {
  try {
    const result = jwt.verify(token, JWT_SECRET);
    return result;
  } catch (error) {
    return {};
  }
}
