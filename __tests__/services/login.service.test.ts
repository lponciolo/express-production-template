import { postLoginService } from "../../src/services/login.service";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

const expect = chai.expect;
const successResponseKeys: any = [
  'role',
  'username', 
  'accessToken'
];
const wrongUserOrPassMessage = "Wrong username or password";

describe("Login Service -> postLoginService", () => {
  it('should throw a "Wrong username or password" error 1', async () => {
    return expect(postLoginService("", "")).to.be.rejectedWith(
      wrongUserOrPassMessage
    );
  });

  it('should throw a "Wrong username or password" error 2', async () => {
    return expect(
      postLoginService("admin", "wrongpassword")
    ).to.be.rejectedWith(
      wrongUserOrPassMessage
      );
  });

  it('should throw a "Wrong username or password" error 3', async () => {
    return expect(postLoginService("", "admin")).to.be.rejectedWith(
      wrongUserOrPassMessage
    );
  });

  it("should get a success response & response should contain keys: username, role & accessToken ", async () => {
    const response = await postLoginService("user", "user");
    return expect(response).to.include.all.keys(
      successResponseKeys
      );
  });

  it("should get a success response & response should contain accessToken ", async () => {
    const response = await postLoginService("user", "user");
    return expect(response).to.have.property("accessToken");
  });
});
