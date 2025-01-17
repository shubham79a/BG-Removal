import express from 'express'
import { clekWebhooks } from '../controllers/userController.js'

const userRouter = express.Router()


userRouter.post('/webhooks', clekWebhooks)


export default userRouter;