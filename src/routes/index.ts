import * as express from 'express'
import authRoute from './auth'
const router = express.Router()

import auth from '../middlewares/auth'

router.get('/', (request, response) => {
  response.send('Hello world!')
})

router.use('/login', authRoute)

router.get('/admin', auth, (request, response) => {
  response.send('Hello admin!')
})

export default router
