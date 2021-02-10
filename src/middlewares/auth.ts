import jwt from 'jsonwebtoken'

const authenticateJWT = (req: any, res: any, next: any) => {
  const accessTokenSecret = process.env.TOKEN_SECRET as string

  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, accessTokenSecret, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
  } else {
    return res.sendStatus(401)
  }
}

export default authenticateJWT
