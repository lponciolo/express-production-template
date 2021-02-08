import * as express from 'express'
const router = express.Router()

// import middlewares
import auth from '../middlewares/auth'
// import controllers

import { getAdminController } from '../controllers/admin.controller'

router.get('/', auth, getAdminController)

export default router
