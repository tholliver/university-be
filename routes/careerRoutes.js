import { Router } from 'express'
import { CareerController } from '../controllers/careerController.js'

export const careerRouter = Router()

careerRouter.get('/', CareerController.getCareers)
careerRouter.post('/', CareerController.createCareer)
