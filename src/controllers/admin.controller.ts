import { Request, Response, NextFunction } from 'express'
import { getAdminService } from '../services/admin.service'

import createError from 'http-errors'

const getAdminController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.user)
    if (req.user.role === 'admin') {
      const serviceMessage = await getAdminService()
      return res.status(200).json({ status: 200, message: serviceMessage })
    } else {
      return next(createError(403, 'access not allowed'))
    }
  } catch (e) {
    return next(createError(500, e.message))
  }
}

export { getAdminController }
