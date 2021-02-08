import { NextFunction, Request } from "express";
import createError from "http-errors";
import { Schema } from "joi";

const  validateRequest = (req: Request, next: NextFunction, schema: Schema) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        let message = `Validation error: ${error.details.map(x => x.message).join(', ')}`
        return next(createError(422,message))
    } else {
        req.body = value;
        next();
    }
  }

export default validateRequest