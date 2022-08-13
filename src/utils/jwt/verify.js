import { verify } from "jsonwebtoken";

function jwtVerification(token) {
  try {
    verify(token, "shhhhh").promise();
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

export default jwtVerification;
