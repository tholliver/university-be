import { Router } from 'express'
import { CareerLevelController } from '../controllers/careerLevelController.js'

export const careerLevelRouter = Router()
careerLevelRouter.post('/', CareerLevelController.createCareerLevel)
