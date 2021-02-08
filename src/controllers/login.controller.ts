import { Request, Response, NextFunction } from "express";
import { postLoginService } from "../services/login.service"

import createError from 'http-errors'

const postLoginController = async (req: Request, res: Response, next: NextFunction) => {

  const { username, password } = req.body
  
  try {
    const response = await postLoginService(username, password)
 // Filter user from the users array by username and password
    if (response.accessToken) {
      return res.status(200).json({ status: 200, ...response, message: "Succesfully login" });
    } else {
      return next(createError(401, 'Username or password incorret'))
    }
  } catch (e) {
    return next(createError(500, e.message))
  }
}


export { postLoginController }
