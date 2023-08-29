import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../conn.js'
import { Course } from './courseModel.js'

export const Professor = sequelizeConnection.define('professor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
// Professor_Course
const Professor_Course = sequelizeConnection.define(
  'professor_course',
  {},
  { timestamps: false }
)
Professor.belongsToMany(Course, { through: Professor_Course })
Course.belongsToMany(Professor, { through: Professor_Course })

// await Professor.sync({ force: true })
// await Professor_Course.sync({ force: true })
// console.log('The table for the User model was just (re)created!')
