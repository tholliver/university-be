import { CareerLevel } from '../models/careerLevelModel.js'
import { validateCareerLevel } from '../schemas/career.js'

export class CareerLevelController {
  static async getCareerLevels(req, res) {
    const { name } = req.query
    const condition = name ? { level_name: name } : null
    // console.log('the cond', condition)

    CareerLevel.findAll({ where: condition })
      .then((data) => {
        return res.send(data)
      })
      .catch((error) => {
        console.log('Failed to get data', error)
      })
  }

  static async createCareerLevel(req, res) {
    const validationRes = validateCareerLevel(req.body)

    if (validationRes.success) {
      const newCareerLevel = await CareerLevel.create(validationRes.data)
      console.log('inserted data: ', newCareerLevel)
      if (newCareerLevel) {
        return res.status(201).send(newCareerLevel)
      }
    }

    return res.status(500).json({ error: JSON.parse(validationRes.error) })
    // .then((data) => {
    //   return res.send(data)
    // })
    // .catch((error) => {
    //   console.log('Failed to get data', error)
    // })
  }
}
