import { DataTypes } from 'sequelize'
import { Career } from './careerModel.js'
import { Student } from './studentModel.js'
import { sequelizeConnection } from '../conn.js'

export const universityCareerStatuses = [
  'Enrolled',
  'Graduated',
  'On Leave',
  'Pending Graduation',
  'Withdrawn'
]

export const CareerEnrollment = sequelizeConnection.define(
  'career_enrollment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    enrollment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.ENUM(...universityCareerStatuses),
      allowNull: false
    }
  }
)

Student.belongsToMany(Career, { through: CareerEnrollment })
Career.belongsToMany(Student, {
  through: CareerEnrollment
})

// await CareerEnrollment.sync({ force: true })
// console.log('The table for the Course Enrollment model was just (re)created!')
