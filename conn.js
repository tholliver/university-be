import 'dotenv/config'
import { Sequelize } from 'sequelize'

console.log(process.env.DATABASE, process.env.DATABASE_HOST)
export const sequelizeConnection = new Sequelize(
  `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`,
  { logging: false }
)

try {
  await sequelizeConnection.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
