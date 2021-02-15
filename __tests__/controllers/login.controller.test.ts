jest.mock('../../src/services/login.service')

import { Request, NextFunction } from 'express'
import createError from 'http-errors'
import { postLoginController } from '../../src/controllers/login.controller'
import { postLoginService } from '../../src/services/login.service'

const mockedPostLoginService = postLoginService as jest.Mock
const req: any = {
  body: {},
} as Request

const correctMockResponse: any = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn(),
  message: jest.fn(),
  json: jest.fn(),
  accessToken: 'correct AccessToken',
}
const next: NextFunction = jest.fn()
const errorMessage = 'error'
const wrongUserRrrorMessage = 'Wrong username'
describe('welcome controller tests', () => {
  it('should get status 200 if correct Request and Service run correctly', async () => {
    mockedPostLoginService.mockImplementation(() => {
      const response = {
        accessToken: 'correct AccessToken',
      }
      return response
    })
    await postLoginController(req, correctMockResponse, next)
    return expect(correctMockResponse.status).toBeCalledWith(200)
  })
  it('controller should call next with createError if Service fails', async () => {
    mockedPostLoginService.mockImplementation(() => {
      throw new Error(errorMessage)
    })
    await postLoginController(req, correctMockResponse, next)
    return expect(next).toBeCalledWith(createError(500, errorMessage))
  })

  it('controller should call 401 if message is Wrong username or password', async () => {
    mockedPostLoginService.mockImplementation(() => {
      throw new Error(wrongUserRrrorMessage)
    })
    await postLoginController(req, correctMockResponse, next)
    return expect(next).toBeCalledWith(createError(401, wrongUserRrrorMessage))
  })
})
