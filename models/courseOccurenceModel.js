import { DataTypes } from 'sequelize'
import { Professor } from './professorModel.js'
import { Course } from './courseModel.js'
import { sequelizeConnection } from '../conn.js'

export const CourseOccurence = sequelizeConnection.define('course_occurence', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  occurence_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  course_occurence_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  capcity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

Course.belongsToMany(Professor, { through: CourseOccurence })
Professor.belongsToMany(Course, {
  through: CourseOccurence
})

// await CourseOccurence.sync({ force: true })
// console.log('The table for the Course Occurrence model was just (re)created!')
