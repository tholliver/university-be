import { Student } from '../models/studentModel.js'
import { validateStudent } from '../schemas/student.js'

export class StudentController {
  static async getAllStudents(req, res) {
    // const { years } = req.query
    // const condition = years ? { duration_years: years } : null

    Student.findAll()
      .then((data) => {
        return res.status(200).send(data) // res.json(movie)
      })
      .catch((error) => {
        console.log('Failed to get data', error)
        res.send('Failed to get data', error)
      })

    // res.status(404).json({ message: 'Movie not found' })
  }

  static async createStudent(req, res) {
    const validationRes = validateStudent(req.body)
    if (validationRes.success) {
      console.log('IMPPP:', validationRes.data.careerId)
      const newStudent = await Student.create(validationRes.data)
      console.log('inserted data: \n', newStudent.dataValues)
      if (newStudent) {
        return res.status(201).send(newStudent)
      }
    }

    return res.status(201).send({ error: validationRes.error })
  }
}
