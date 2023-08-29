import { Router } from 'express'
import { StudentController } from '../controllers/studentController.js'

export const studentRouter = Router()

studentRouter.get('/', StudentController.getAllStudents)
studentRouter.post('/', StudentController.createStudent)
