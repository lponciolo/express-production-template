/**
 * Required External Modules
 */
import loaders from './loaders'
import express from 'express'


/**
 * App Variables
 */
const init = async () => {
  const app = express()

  loaders(app).then(() => {
    if (!process.env.PORT) {
      process.exit(1)
    }

    const PORT: number = parseInt(process.env.PORT as string, 10)



    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  })
}

init()
/**
 *  App Configuration
 */

/**
 * Server Activation
 */

/**
 * Webpack HMR Activation
 */
