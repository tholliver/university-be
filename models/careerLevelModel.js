import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../conn.js'

// const sequelize = new Sequelize('sqlite::memory:')

export const CareerLevel = sequelizeConnection.define('careerlevel', {
  level_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
