import {getAdminWelcome} from "../../src/services/admin.service"

describe('Admin Service -> getAdminWelcome', () => {
    it('should get a welcome message when called', async() => {
        const returnValue = await getAdminWelcome()
        expect(returnValue).toBe('Hello Admin!')
    })
  })