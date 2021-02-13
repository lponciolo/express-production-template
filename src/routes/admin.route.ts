import { Router } from 'express'
import { getAdminRouteValidationSchema } from '../validators/admin.validation'
// import middlewares
import auth from '../middlewares/auth'
// import controllers
import { getAdminController } from '../controllers/admin.controller'

const router = Router()
router.get('/', getAdminRouteValidationSchema, auth, getAdminController)

export default router
