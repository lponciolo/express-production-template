import { Router } from 'express'
import { getAdminRouteValidationSchema } from '../validators/admin.validation'
const router = Router()

// import middlewares
import auth from '../middlewares/auth'
// import controllers

import { getAdminController } from '../controllers/admin.controller'

router.get('/', getAdminRouteValidationSchema, auth, getAdminController)

export default router
