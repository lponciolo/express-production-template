import * as express from 'express'
const router = express.Router()
import bodyParser from 'body-parser'
import loginValidationSchema from '../validators/login.validation'
// import controllers

import { postLoginController } from '../controllers/login.controller'
//
router.use(bodyParser.urlencoded({ extended: false }))
router.post('/', loginValidationSchema, postLoginController)

export default router
