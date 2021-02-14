import supertest from "supertest";
import chai from "chai";
import sinonChai from "sinon-chai";
import { app } from "../../src/index";

chai.use(sinonChai);
export const { expect } = chai;
export const server = supertest.agent(app);
const wrongBody = {
  username: "admin",
  password: "admin",
};
const correctBody = {};
const accessToken = process.env.TEST_ACCESS_TOKEN;
const invalidAcessToken = "125125125"

describe("admin route tests", () => {
  it("should get status 200 with correct body request", (done) => {
    server
      .get(`/admin`)
      .set("Authorization", `Basic ${accessToken}`)
      .set("Accept", "application/json")
      .send(correctBody) // x-www-form-urlencoded upload
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it("should get status 403 with invalid access token", (done) => {
    server
      .get(`/admin`)
      .set("Authorization", `Basic ${invalidAcessToken}`)
      .set("Accept", "application/json")
      .send(correctBody) // x-www-form-urlencoded upload
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done();
      });
  });
  it("should throw a 422 code error without correct Request & correct accessToken", (done) => {
    server
      .get(`/admin`)
      .set("Authorization", `Basic ${accessToken}`)
      .set("Accept", "application/json")
      .send(wrongBody) // x-www-form-urlencoded upload
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        done();
      });
  });
  it("should throw status 422 whithout accessToken", (done) => {
    server.get(`/admin`).end((err, res) => {
      expect(res.status).to.equal(422);
      done();
    });
  });
});
