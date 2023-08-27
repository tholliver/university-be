import { DataTypes } from 'sequelize'
import { CourseOccurence } from './courseOccurenceModel.js'
import { sequelizeConnection } from '../conn.js'
import { Student } from './studentModel.js'

export const CourseEnrollment = sequelizeConnection.define(
  'career_enrollment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    optative: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    final_score: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }
)

CourseOccurence.belongsToMany(Student, { through: CourseEnrollment })
Student.belongsToMany(CourseOccurence, {
  through: CourseEnrollment
})

await CourseEnrollment.sync({ force: true })
console.log('The table for the Course Enrollment model was just (re)created!')
