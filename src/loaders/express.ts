import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import routes from './../routes'

export default async ({ app }: { app: express.Application }) => {
  const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    // origin: API_URL,
    preflightContinue: false,
  }

  app.enable('trust proxy')
  app.use(helmet())
  app.use(cors(options))
  app.use(require('morgan')('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('/', routes)
  // ...Más middlewares

  // Devuelve la aplicación express
  return app
}
