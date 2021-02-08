import { Request, Response, NextFunction } from 'express'

const MiddleWare404 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await res.status(404).send('Sorry cant find that!')
}

export default MiddleWare404
