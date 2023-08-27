import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../conn.js'

export const Student = sequelizeConnection.define('student', {
  student_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  student_lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_birth: {
    type: DataTypes.DATEONLY,
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

await Student.sync({ force: true })
console.log('The table for the Student model was just (re)created!')
