process.env.JWT_SECRET = "yoursecret";
process.env.JWT_EXP = "10m";
import request from "supertest";
import app from "../../../app";

describe("[router] Sign out test", () => {
  it("", async () => {
    const response = await request(app)
      .post("/auth/sign-out")
      .send({
        username: "username",
        password: "password",
      })
      .expect(200);

    expect(
      response
        .get("Set-Cookie")
        .toString()
        .includes("session=;")
    ).toBe(true);
  });
});
