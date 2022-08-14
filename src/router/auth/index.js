// express router for sign up
import express from "express";
import { signUp, signIn } from "../../services/auth";
import Response from "../../utils/response";
import { body } from "express-validator";
import { requestValidation } from "../../middlewares/validation";
import { verifyJWTToken } from "../../utils/jwt";

const router = express.Router();

// sign up router
router.post("/sign-up", async (req, res) => {
  try {
    const body = req.body;
    const { token, username } = await signUp(body);
    req.session.jwt = token;
    Response.success(res, { token, username });
  } catch (error) {
    Response.error(res, { message: error.message });
  }
});

// sign up router
const signInValidator = [
  body("username")
    .isString()
    .withMessage("username must exist"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 5, max: 30 })
    .withMessage("password must be between 5 and 30 characters"),
];

router.post(
  "/sign-in",
  signInValidator,
  requestValidation,
  async (req, res) => {
    try {
      const body = req.body;
      const { token, username } = await signIn(body);
      req.session.jwt = token;
      Response.success(res, { token, username });
    } catch (error) {
      Response.error(res, { message: error.message });
    }
  }
);

// sign up router
router.get("/current-user", async (req, res) => {
  try {
    const sessionToken = req.session.jwt;
    const isTokenValid = await verifyJWTToken(sessionToken);
    if (!sessionToken || !isTokenValid) {
      Response.success(res, { currentUser: {} });
    } else {
      // TODO: 这边可以将 用户的 id 一起数入，然后在数据库里查找一次用id
      Response.success(res, { currentUser: {} });
    }
  } catch (error) {
    Response.error(res, { message: error.message });
  }
});

// sign up router
router.post("/sign-out", async (req, res) => {
  try {
    req.session = null;
    Response.success(res, {});
  } catch (error) {
    Response.error(res, { message: error.message });
  }
});

export default router;
