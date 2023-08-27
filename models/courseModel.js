import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../conn.js'
import { Career } from './careerModel.js'

export const Course = sequelizeConnection.define('course', {
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
  semester: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
Career.hasMany(Course)
Course.belongsTo(Career)

// Course.sync({ force: true }); //if CREATION
