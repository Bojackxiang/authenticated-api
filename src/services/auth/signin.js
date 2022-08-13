import jwt from "jsonwebtoken";

function signIn(payload) {
  return new Promise((resolve, reject) => {
    const { username, password } = payload;
    if (!username || !password) {
      reject(new Error("Username and password are required"));
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    resolve({ token, username });
  });
}

export default signIn;
