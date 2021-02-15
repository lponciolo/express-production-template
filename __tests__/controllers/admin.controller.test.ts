jest.mock('../../src/services/admin.service')

import { Request, NextFunction } from 'express'
import createError from 'http-errors'
import { getAdminController } from '../../src/controllers/admin.controller'
import { getAdminWelcome } from '../../src/services/admin.service'

const mockedPostLoginService = getAdminWelcome as jest.Mock

mockedPostLoginService.mockImplementation(() => {
  return 'Hello Admin!'
})
const correctReq: any = {
  body: {},
  user: {
    role: 'admin',
  },
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

describe('welcome controller tests', () => {
  it('should get status 200 if correct Request and Service run correctly', async () => {
    await getAdminController(correctReq, correctMockResponse, next)
    return expect(correctMockResponse.status).toBeCalledWith(200)
  })
  it('controller should call next with createError if Service fails', async () => {
    mockedPostLoginService.mockImplementation(() => {
      throw new Error(errorMessage)
    })
    await getAdminController(correctReq, correctMockResponse, next)
    return expect(next).toBeCalledWith(createError(500, errorMessage))
  })
  it('controller should call 401 user.role is not provided', async () => {
    const wrongRequest: any = {
      body: {},
      user: {},
    } as Request
    await getAdminController(wrongRequest, correctMockResponse, next)
    return expect(next).toBeCalledWith(createError(401))
  })
  it('controller should call 401 user is not provided', async () => {
    const wrongRequest: any = {
      body: {},
    } as Request
    await getAdminController(wrongRequest, correctMockResponse, next)
    return expect(next).toBeCalledWith(createError(401))
  })

  it('controller should call 401 user.role is not authorized', async () => {
    const wrongRequest: any = {
      body: {},
      user: { role: 'user' },
    } as Request
    await getAdminController(wrongRequest, correctMockResponse, next)
    return expect(next).toBeCalledWith(createError(401))
  })
})
