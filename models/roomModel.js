import { DataTypes } from 'sequelize'
// import { Schedule } from './scheduleModel.js'
import { sequelizeConnection } from '../conn.js'

export const Room = sequelizeConnection.define('room', {
  room_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  room_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  room_capacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// Room.hasMany(Schedule)
// Schedule.belongsTo(Room)

// Course.belongsToMany(Professor, { through: CourseOccurence })
// Professor.belongsToMany(Course, {
//   through: CourseOccurence
// })

// await Room.sync({ force: true })
// console.log('The table for the Course Occurrence model was just (re)created!')
