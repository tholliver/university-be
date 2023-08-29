import { DataTypes } from 'sequelize'
import { Room } from './roomModel.js'
import { CourseOccurence } from './courseOccurenceModel.js'
import { sequelizeConnection } from '../conn.js'

export const Schedule = sequelizeConnection.define('schedule', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  week_day: {
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
  }
})

Room.belongsToMany(CourseOccurence, { through: Schedule })
CourseOccurence.belongsToMany(Room, {
  through: Schedule
})

// await Schedule.sync({ force: true })
// console.log('The table for the Course Occurrence model was just (re)created!')
