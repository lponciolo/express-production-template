jest.mock("../../src/validators")

import validationUtils from "../../test_utils/validators"
import validateRequest from "../../src/validators"

import { loginValidationSchema } from "../../src/validators/login.validation"


const emptyNext: any = () => { }

const emptyRes: any = () => { }
describe('Admin Service -> getAdminWelcome', () => {
    const mockRequest: any = { body: { username: "username", password: "password" } }
    const mockValidateRequest = validateRequest as jest.Mock
    mockValidateRequest.mockImplementation((mock, emptyNext, schema) => validationUtils(mock, schema))
    it('should get a successfull validation', async () => {
        expect(loginValidationSchema(mockRequest, emptyRes, emptyNext)).toStrictEqual(mockRequest.body)
        expect(mockValidateRequest).toHaveBeenCalledTimes(1)
    })
})