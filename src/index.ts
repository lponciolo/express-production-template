/**
 * Required External Modules
 */
import loaders from './loaders'
import express from 'express'

/**
 * App Variables
 */

const app = express()

loaders(app).then(() => {
  if (!process.env.PORT) {
    process.exit(1)
  }

  const PORT: number = parseInt(process.env.PORT as string, 10)

  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
  server.close()
})

export { app }
/**
 *  App Configuration
 */

/**
 * Server Activation
 */

/**
 * Webpack HMR Activation
 */
