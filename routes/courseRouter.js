import { Router } from 'express'
import { CourseController } from '../controllers/courseController.js'

export const courseRouter = Router()

courseRouter.get('/', CourseController.getCourses)
courseRouter.post('/', CourseController.createCourse)
