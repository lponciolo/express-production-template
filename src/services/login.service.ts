import jwt from 'jsonwebtoken'

const postLoginService = async (username: String, password: String) => {
  const users = [
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
  console.log(username)
  console.log(password)
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
  }
  const response = {
    ...user,
    accessToken: accessToken,
  }
  console.log(response)
  return await response
}

export { postLoginService }
