import {postLoginService} from "../../src/services/login.service"


describe('Admin Service -> getAdminWelcome', () => {
    it('should throw a "Wrong username or password" error ', async() => {
        expect(postLoginService("","")).rejects.toThrow("Wrong username or password")
      //  try {
      //      await postLoginService( "" , "")
      //  } catch (error) {
      //      expect(error.message).to.equal("Wrong username or password")
      //  }
    
    })
  })