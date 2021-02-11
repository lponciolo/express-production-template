import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import validateRequest from './index'

const Schema = Joi.object({
  username: Joi.string().required().empty().messages({
    'string.base': `"username" should be a type of 'text'`,
    'string.empty': `"username" cannot be an empty field`,
    'any.required': `"username" is a required field`,
  }),
  password: Joi.string().required().messages({
    'string.base': `"password" should be a type of 'text'`,
    'string.empty': `"password" cannot be an empty field`,
    'any.required': `"password" is a required field`,
  }),
})

const loginValidationSchema = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return validateRequest(req, next, Schema)
}

export { loginValidationSchema }
