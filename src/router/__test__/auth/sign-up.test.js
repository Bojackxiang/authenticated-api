process.env.JWT_SECRET = "yoursecret";
process.env.JWT_EXP = "10m";
import request from "supertest";
import app from "../../../app";

describe("[router] Sign up test", () => {
  it("it should return success:true when input username and password ", async () => {
    const test = await request(app)
      .post("/auth/sign-up")
      .send({
        username: "username",
        password: "password",
      })
      .expect(200);
    expect(test.body.success).toEqual(true);
  });

  it("it should return success:false when missing username or password ", async () => {
    const testMissingUsername = await request(app)
      .post("/auth/sign-up")
      .send({ password: "password" })
      .expect(400);
    expect(testMissingUsername.body.success).toEqual(false);

    const testMissingPassword = await request(app)
      .post("/auth/sign-up")
      .send({ username: "username" })
      .expect(400);
    expect(testMissingPassword.body.success).toEqual(false);
  });

  it("it should return success false when no body input ", async () => {
    const test = await request(app)
      .post("/auth/sign-up")
      .send({})
      .expect(400);
    expect(test.body.success).toEqual(false);
  });

  it("it should has token in the cookie in the sign up response", async () => {
    const response = await request(app)
      .post("/auth/sign-up")
      .send({
        username: "username",
        password: "password",
      })
      .expect(200);

    expect(response.get("Set-Cookie")).toBeDefined();
  });

  // TODO: TEST INVALID PASSWORD

  // TODO: TEST DUPLICATE USERNAME
});
