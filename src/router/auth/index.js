// express router for sign up
import express from "express";
import { signUp } from "../../services/auth";
import Response from "../../utils/response";

const router = express.Router();

// sign up router
router.post("/sign-up", async (req, res) => {
  try {
    const body = req.body;
    const { token, username } = await signUp(body);
    req.session.jwt = token;
    Response.success(res, { token, username });
  } catch (error) {
    Response.success(res, { message: error.message });
  }
});

export default router;
