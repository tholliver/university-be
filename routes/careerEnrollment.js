import { Router } from 'express'
import { CareerEnrollmentController } from '../controllers/careerEnrollmentController.js'

export const careerEnrollmentRouter = Router()

careerEnrollmentRouter.get('/', CareerEnrollmentController.getStudentsCareers)
careerEnrollmentRouter.put('/', CareerEnrollmentController.enrollStudent)
careerEnrollmentRouter.post('/', CareerEnrollmentController.enrollNewStudent)
