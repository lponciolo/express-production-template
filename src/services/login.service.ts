import jwt from 'jsonwebtoken'

const dbuser = async () => [
  {
    username: process.env.USER_NAME,
    password: process.env.USER_PASS,
    role: 'admin',
  },
  {
    username: 'user',
    password: 'user',
    role: 'user',
  },
]

const postLoginService = async (username: String, password: String) => {
  const users = await dbuser()
  const accessTokenSecret = process.env.TOKEN_SECRET as string
  let accessToken = undefined
  // Filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password
  })

  if (user) {
    // Generate an access token
    accessToken = jwt.sign(
      { username: user.username, role: user.role },
      accessTokenSecret
    )

    const response = {
      ...user,
      accessToken: accessToken,
    }

    return response
  } else {
    throw new Error('Wrong username or password')
  }
}

export { postLoginService }
