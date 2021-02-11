import { NextFunction, Request } from 'express'
import createError from 'http-errors'
import { Schema } from 'joi'

const validateRequest = (req: Request, next: NextFunction, schema: Schema) => {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: false, // ignore unknown props
    stripUnknown: false, // remove unknown props
  }
  const { error, value } = schema.validate(req.body, options)
  if (error) {
    const message = `Validation error: ${error.details
      .map((x) => x.message)
      .join(', ')}`
    return next(createError(422, message))
  } else {
    req.body = value
    next()
  }
}

export default validateRequest
