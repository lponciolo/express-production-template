jest.mock('../../src/services/welcome.service')

import { Request, NextFunction } from 'express'
import createError from 'http-errors'
import { getWelcomeController } from '../../src/controllers/wellcome.controller'
import { getWelcomeService } from '../../src/services/welcome.service'

const mockedGetWelcomeService = getWelcomeService as jest.Mock
const req: any = {
  body: {},
} as Request
const mockResponse: any = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn(),
  message: jest.fn(),
  json: jest.fn(),
}
const next: NextFunction = jest.fn()
const errorMessage = 'error'

describe('welcome controller tests', () => {
  it('should get status 200 if correct Request and Service run correctly', async () => {
    mockedGetWelcomeService.mockImplementation(() => {
      return 'called'
    })
    await getWelcomeController(req, mockResponse, next)
    return expect(mockResponse.status).toBeCalledWith(200)
  })
  it('controller should call next with createError if Service fails', async () => {
    mockedGetWelcomeService.mockImplementation(() => {
      throw new Error(errorMessage)
    })
    await getWelcomeController(req, mockResponse, next)
    return expect(next).toBeCalledWith(createError(500, errorMessage))
  })
})
