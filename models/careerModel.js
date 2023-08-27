import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../conn.js'
import { CareerLevel } from './careerLevelModel.js'

export const Career = sequelizeConnection.define('career', {
  career_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration_years: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
CareerLevel.hasMany(Career)
Career.belongsTo(CareerLevel)
