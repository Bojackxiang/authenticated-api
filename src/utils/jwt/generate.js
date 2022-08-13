import jwt from "jsonwebtoken";

function generateJWTToken() {
  return jwt.sign({ foo: "bar" }, "shhhhh", { expiresIn: "10s" });
}

export default generateJWTToken;
