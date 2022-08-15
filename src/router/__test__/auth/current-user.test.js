process.env.JWT_SECRET = "yoursecret";
process.env.JWT_EXP = "10m";
import request from "supertest";
import app from "../../../app";

describe("[router] Sign up test", () => {
  it("it should return current user when request with a cookie ", async () => {
    const authResponse = await request(app)
      .post("/auth/sign-up")
      .send({
        username: "username",
        password: "password",
      })
      .expect(200);

    const cookie = authResponse.get("Set-Cookie");

    const currentUserResponse = await request(app)
      .get("/auth/current-user")
      .set("Cookie", cookie)
      .expect(200);

    expect(currentUserResponse.body.success).toBe(true);
    expect(currentUserResponse.body.currentUser).not.toBeUndefined();
  });

  it("it should return unauthorized when there is cookie in the request ", async () => {
    const currentUserResponse = await request(app)
      .get("/auth/current-user")
      .expect(401);
  });
});
