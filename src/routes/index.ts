import { Router } from 'express'

const router = Router()

// import controllers
import WelcomeRoute from './welcome.route'
import loginRoute from './login.route'
import adminRoute from './admin.route'
//

// import more routes here

router.use('/', WelcomeRoute)
router.use('/login', loginRoute)
router.use('/admin', adminRoute)

export default router
