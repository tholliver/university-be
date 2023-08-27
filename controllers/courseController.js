import { Course } from '../models/courseModel.js'
import {
  validateCourse
  // validatePartialCourse
} from '../schemas/course.js'

export class CourseController {
  static async getCourses(req, res) {
    const { years } = req.query
    const condition = years ? { duration_years: years } : null
    console.log('the cond', condition)

    Course.findAll({ where: condition })
      .then((data) => {
        return res.send(data)
      })
      .catch((error) => {
        console.log('Failed to get data', error)
        res.send('Failed to get data', error)
      })
  }

  static async createCourse(req, res) {
    const validationRes = validateCourse(req.body)
    // console.log('the cond', validationRes.data.careerId)
    if (validationRes.success) {
      const newCareer = await Course.create(validationRes.data)
      console.log('inserted data:\\ ', newCareer.dataValues)
      if (newCareer) {
        return res.status(201).send(newCareer)
      }
    }

    return { error: 'Error creating' }
  }
}
