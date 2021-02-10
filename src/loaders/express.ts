import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import routes from './../routes'
import MiddleWare404 from '../middlewares/404'

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
    origin: process.env.API_URL,
    preflightContinue: false,
  }

  app.enable('trust proxy')
  app.use(helmet())
  app.use(cors(options))
  app.use(require('morgan')('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // ...add more middlewares here

  app.use('/', routes)
  // Devuelve la aplicación express
  // 404 MiddleWare
  app.use('/*', MiddleWare404)
  return app
}