import { Router } from 'express'
import { CareerLevelController } from '../controllers/careerLevelController.js'

export const careerLevelRouter = Router()
careerLevelRouter.get('/', CareerLevelController.getCareerLevels)
careerLevelRouter.post('/', CareerLevelController.createCareerLevel)
