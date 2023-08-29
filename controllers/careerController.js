import { Career } from '../models/careerModel.js'
import { validateCareer } from '../schemas/career.js'
// validatePartialCareer
// import { sequelizeConnection } from '../conn.js'

// export const getCareers = sequelizeConnection.sync().then(() => {

// })

export class CareerController {
  static async getCareers(req, res) {
    const { years } = req.query
    const condition = years ? { duration_years: years } : null
    console.log('the cond', condition)

    Career.findAll({ where: condition })
      .then((data) => {
        return res.send(data)
      })
      .catch((error) => {
        console.log('Failed to get data', error)
        res.send('Failed to get data', error)
      })
  }

  static async createCareer(req, res) {
    const validationRes = validateCareer(req.body)

    if (validationRes.success) {
      const newCareer = await Career.create(validationRes.data)
      console.log('inserted data: ', newCareer)
      if (newCareer) {
        return res.status(201).send(newCareer)
      }
    }
    return { error: validationRes.error }
  }
}
