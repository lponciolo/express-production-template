
import { Schema } from "joi";

const validationUtils = (mock: any, schema: Schema) => {
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: false, // ignore unknown props
      stripUnknown: false, // remove unknown props
    }
    const { error, value } = schema.validate(mock.body, options)
    if (error) {
      const message = `Validation error: ${error.details
        .map((x) => x.message)
        .join(', ')}`
    throw new Error(message)
    
    } else {
      mock = value
      return mock
    }
  }
export default validationUtils