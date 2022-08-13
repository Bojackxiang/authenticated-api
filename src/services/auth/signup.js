import { generateJWTToken } from "../../utils/jwt";

function signUp(payload) {
  const { username, password } = payload;
  // mock a sign up service
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      reject(new Error("Username and password are required"));
    }

    // generate the token
    const token = generateJWTToken({ username });

    resolve({ username, token });
  });
}

export default signUp;
