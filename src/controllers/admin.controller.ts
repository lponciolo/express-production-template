import { Request, Response, NextFunction } from 'express'
import { getAdminWelcome } from '../services/admin.service'

import createError from 'http-errors'

const getAdminController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user) return next(createError(401))
    if (req.user.role !== 'admin') return next(createError(401))

    const serviceMessage = await getAdminWelcome()

    return res.status(200).json({ status: 200, message: serviceMessage })
  } catch (e) {
    return next(createError(500, e.message))
  }
}

export { getAdminController }
