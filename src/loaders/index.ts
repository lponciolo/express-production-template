import express from 'express'
import expressLoader from './express'
import Logger from './logger'
import * as dotenv from 'dotenv'
import path from 'path'

export default async (expressApp: express.Application) => {
  Logger.info('inicializando')
  const result = dotenv.config({ path: path.join(__dirname, '../../../.env') })
  if (result.error) {
    Logger.error('error loading dot-env')
    throw result.error
  } else {
    Logger.info('dot-env loaded')
  }
  await expressLoader({ app: expressApp })
}
