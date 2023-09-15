import QueryTypes from 'sequelize'
import { sequelizeConnection } from '../conn.js'

export class DashboardController {
  static async getStatistics(req, res) {
    const query = `
    SELECT
    (SELECT count(*) FROM careers) AS ${`num_of_careers`},
    (SELECT count(*) FROM students) as ${`num_of_students`};
    `
    const records = await sequelizeConnection.query(query, {
      type: QueryTypes.SELECT
    })
    console.log(JSON.stringify(records[0], null, 2))
    res.status(200).send(records[0])
  }
}
