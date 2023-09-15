// import { CareerEnrollment } from '../models/careerEnrollmentModel.js'
// import { Career } from '../models/careerModel.js'
// import { CareerEnrollment } from '../models/careerEnrollmentModel.js'
import { Career } from '../models/careerModel.js'
import { Student } from '../models/studentModel.js'

import { validateCareerEnrollmentSchema } from '../schemas/career.enrollment.js'
import { validateStudent } from '../schemas/student.js'
// import { sequelizeConnection } from '../conn.js'

// export const getCareers = sequelizeConnection.sync().then(() => {

// })

export class CareerEnrollmentController {
  static async getStudentsCareers(req, res) {
    // const { years } = req.query
    // const condition = years ? { duration_years: years } : null

    Student.findAll({
      include: {
        model: Career,
        required: true
      }
    })
      .then((data) => {
        return res.status(200).send(data)
      })
      .catch((error) => {
        res.send('Failed to get student careers data', error)
      })
  }

  static async enrollStudent(req, res) {
    const validationRes = validateCareerEnrollmentSchema(req.body)

    if (validationRes.success) {
      const [studentPromise, careerPromise] = await Promise.all([
        Student.findByPk(validationRes.data.studentId),
        Career.findByPk(validationRes.data.careerId)
      ])

      if (careerPromise && studentPromise) {
        const newStudentEnroll = await studentPromise.addCareer(careerPromise, {
          through: { status: validationRes.data.status }
        })
        return res.status(201).send(newStudentEnroll)
      }

      return res.status(404).send({ error: 'No tables found' })
    }
    return res.status(500).send({ error: 'No check the data' })
  }

  static async enrollNewStudent(req, res) {
    const validationRes = validateStudent(req.body)

    if (validationRes.success) {
      // The id coareer should allways be found | Sending a existing career
      const [careerPromise, newStudent] = await Promise.all([
        Career.findByPk(validationRes.data.careerId),
        Student.create(validationRes.data)
      ])
      // console.log('inserted data: \n', newStudent.dataValues)

      if (careerPromise && newStudent) {
        const newStudentEnroll = await newStudent.addCareer(careerPromise, {
          through: { status: 'Enrolled' }
        })
        return res.status(201).send(newStudentEnroll)
      }

      return res.status(404).send({ error: 'No tables found' })
    }
    console.log('Validation erros: ', validationRes.error)
    return res.status(500).send({ error: 'No check the data' })
  }
}
