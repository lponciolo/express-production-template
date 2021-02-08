import * as express from 'express'

const router = express.Router()

//import controllers
import WelcomeRoute from "./welcome.route"
import loginRoute from './login.route'
import adminRoute from './admin.route'
//

// import more routes here

router.use('/', WelcomeRoute )
router.use('/login', loginRoute)
router.use('/admin',adminRoute)

export default router
